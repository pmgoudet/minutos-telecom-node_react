export default class Client {
  constructor({ id_client, name, date_of_birth, address, complement, postal_code, city, phone, email, password, client_type, status = "active", fk_id_admin, registration_date = new Date() }) {

    const validStatus = ["active", "inactive"];
    if (!validStatus.includes(status)) {
      throw new Error(`Invalid status: "${status}". Must be "active" or "inactive".`);
    }

    const validClientType = ["residential", "corporate"];
    if (!validClientType.includes(client_type)) {
      throw new Error(`Invalid type: "${client_type}". Type must be "residential" or "corporate".`);
    }

    this.id_client = id_client;
    this.name = name;
    this.date_of_birth = date_of_birth;
    this.address = address;
    this.complement = complement;
    this.postal_code = postal_code;
    this.city = city;
    this.phone = phone;
    this.email = email;
    this.password = password;
    this.client_type = client_type;
    this.status = status;
    this.fk_id_admin = fk_id_admin;
    this.registration_date = registration_date;
  }

  toJSON() {
    const { password, ...safe } = this;
    return safe;
  }

}


