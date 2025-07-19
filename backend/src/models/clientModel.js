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

  // async queryDeleteAdmin(id) {
  //   const db = await connect();
  //   await db.query(`UPDATE admins SET status = 'inactive' WHERE id_admin = ?`, [id]);
  // }

  // async queryUpdateAdmin(update, id) {
  //   const db = await connect();
  //   const sql = (`UPDATE admins 
  //   SET name = COALESCE(NULLIF(?, ''), name),
  //   email = COALESCE(NULLIF(?, ''), email),
  //   status = COALESCE(NULLIF(?, ''), status)
  // WHERE id_admin = ?`);
  //   const values = [update.name, update.email, update.status, id];
  //   await db.query(sql, values);
  // }

}