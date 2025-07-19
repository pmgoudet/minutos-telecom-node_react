export default class Admin {
  constructor({ id_admin, name, email, status = "active", password, registration_date = new Date() }) {

    const validStatus = ["active", "inactive"];
    if (!validStatus.includes(status)) {
      throw new Error(`Invalid status: "${status}". Must be "active" or "inactive".`);
    }

    this.id_admin = id_admin;
    this.name = name;
    this.email = email;
    this.password = password;
    this.registration_date = registration_date;
    this.status = status;
  }

  // When it returns a JSON, password is protected
  toJSON() {
    const { password, ...safe } = this;
    return safe;
  }

}