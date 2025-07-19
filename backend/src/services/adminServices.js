import { sanitizeAdminData } from "../middlewares/sanitizeAdmin.js";
import AdminModel from "../models/adminModel.js";
import bcrypt from 'bcrypt';

export default class AdminServices {

  constructor() {
    this.adminModel = new AdminModel();
  }

  async fetchCreateAdmin(admin) {

    // sanitize
    const sanitizedAdmin = sanitizeAdminData(admin);

    // verify existing email
    const emailExists = await this.adminModel.queryAdminByEmail(sanitizedAdmin.email)
    if (emailExists) {
      throw new Error('Email already registered.');
    }

    const saltRounds = 10; //the bigger the safer, but longer to process. 10 is standard, good enough, 14 is strong
    const hashedPassword = await bcrypt.hash(sanitizedAdmin.password, saltRounds);

    const adminToCreate = {
      name: sanitizedAdmin.name,
      email: sanitizedAdmin.email,
      password: hashedPassword,
    };

    const createdAdmin = await this.adminModel.queryCreateAdmin(adminToCreate);
    return createdAdmin;
  };

  async fetchUpdateAdmin(update, id) {
    this.adminModel.queryUpdateAdmin(update, id)
  }

  //todo CRIAR AQUI UM DELETE PARA CONTROLAR A RESPOSTA QUE TEM QUE DAR O OBJETO DO ADMIN DELETADO
}