import connect from '../config/dbconnect.js';

export default class ClientModel {

  async queryActiveClients() {
    const db = await connect();
    const [rows] = await db.query("SELECT id_client, name, date_of_birth, address, complement, postal_code, city, phone, email, password, client_type, status fk_id_admin, registration_date FROM clients WHERE status = 'active'");
    return rows;
  }; //! left "password" to test Client.toJSON() method; 

  async queryInactiveClients() {
    const db = await connect();
    const [rows] = await db.query("SELECT id_client, name, date_of_birth, address, complement, postal_code, city, phone, email, password, client_type, status fk_id_admin, registration_date FROM clients WHERE status = 'inactive'");
    return rows;
  };

  async queryClientById(id) {
    const db = await connect();
    const [rows] = await db.query(`SELECT id_client, name, date_of_birth, address, complement, postal_code, city, phone, email, password, client_type, status fk_id_admin, registration_date FROM clients WHERE id_client = ? LIMIT 1`, [id]);
    return rows[0];
  };

  async queryCreateClient(client) {
    const db = await connect();
    const sql = 'INSERT INTO clients (`name`, date_of_birth, address, complement, postal_code, city, phone, email, password, client_type, status, fk_id_admin) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    const values = [client.name, client.date_of_birth, client.address, client.complement, client.postal_code, client.city, client.phone, client.email, client.password, client.client_type, client.status, client.fk_id_admin];
    const [result] = await db.query(sql, values);
    return { id_client: result.insertId, name: client.name, email: client.email }; //insertId vem do objeto que o SQL retorna quando é auto_increment
  };

  async queryClientByEmail(email) {
    const db = await connect();
    const [rows] = await db.query(`SELECT email FROM clients WHERE email = ? LIMIT 1`, [email]);
    return rows[0];
  };

  async queryUpdateClient(update, id) {
    const db = await connect();
    const sql = (`UPDATE clients SET 
      name = COALESCE(NULLIF(?, ''), name),
      date_of_birth = COALESCE(NULLIF(?, ''), date_of_birth),
      address = COALESCE(NULLIF(?, ''), address),
      complement = COALESCE(NULLIF(?, ''), complement),
      postal_code = COALESCE(NULLIF(?, ''), postal_code),
      city = COALESCE(NULLIF(?, ''), city),
      phone = COALESCE(NULLIF(?, ''), phone),
      email = COALESCE(NULLIF(?, ''), email),
      password = COALESCE(NULLIF(?, ''), password),
      client_type = COALESCE(NULLIF(?, ''), client_type),
      fk_id_admin = COALESCE(NULLIF(?, ''), fk_id_admin)
    WHERE id_client = ?`);
    const values = [
      update.name || '',
      update.date_of_birth || '',
      update.address || '',
      update.complement || '',
      update.postal_code || '',
      update.city || '',
      update.phone || '',
      update.email || '',
      update.password || '',
      update.client_type || '',
      update.fk_id_admin || '',
      id
    ];
    await db.query(sql, values);
  }

  async queryDeleteClient(id) {
    const db = await connect();
    await db.query(`UPDATE clients SET status = 'inactive' WHERE id_client = ?`, [id]);
  }

  async queryRestoreClient(id) {
    const db = await connect();
    await db.query(`UPDATE clients SET status = 'active' WHERE id_client = ?`, [id]);
  }

}