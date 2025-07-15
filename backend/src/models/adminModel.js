import connect from '../config/dbconnect.js';

export default class AdminModel {

  async queryActiveAdmins() {
    const db = await connect();
    const [rows] = await db.query("SELECT id_admin, `name`, email, `status`, registration_date FROM admins WHERE status = 'active'");
    return rows;
  };

  async queryInactiveAdmins() {
    const db = await connect();
    const [rows] = await db.query("SELECT id_admin, `name`, email, `status`, registration_date FROM admins WHERE status = 'inactive'");
    return rows;
  };

  async queryAdminById(id) {
    const db = await connect();
    const [rows] = await db.query(`SELECT id_admin, name, email, status, registration_date FROM admins WHERE id_admin = ? LIMIT 1`, [id]);
    return rows[0];
  };

  async queryCreateAdmin(admin) {
    const db = await connect();
    const sql = 'INSERT INTO admins (`name`, email, password) VALUES (?, ?, ?)';
    const values = [admin.name, admin.email, admin.password];
    const [result] = await db.query(sql, values);
    return { id_admin: result.insertId, name: admin.name, email: admin.email }; //insertId vem do objeto que o SQL retorna quando é auto_increment
  };

  async queryAdminByEmail(email) {
    const db = await connect();
    const [rows] = await db.query(`SELECT email FROM admins WHERE email = ? LIMIT 1`, [email]);
    return rows[0];
  };

  async queryDeleteAdmin(id) {
    const db = await connect();
    await db.query(`UPDATE admins SET status = 'inactive' WHERE id_admin = ?`, [id]);
  }

  async queryUpdateAdmin(update, id) {
    const db = await connect();
    const sql = (`UPDATE admins 
    SET name = COALESCE(NULLIF(?, ''), name),
    email = COALESCE(NULLIF(?, ''), email),
    status = COALESCE(NULLIF(?, ''), status)
  WHERE id_admin = ?`);
    const values = [update.name, update.email, update.status, id];
    await db.query(sql, values);
  }

}