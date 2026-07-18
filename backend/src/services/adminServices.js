// import { sanitizeAdminData, sanitizeUpdatedAdminData } from "../middlewares/sanitizeAdmin.js";
import AdminModel from "../models/adminModel.js";
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import jwtConfig from "../jwtConfig.js";

export default class AdminServices {

  constructor() {
    this.adminModel = new AdminModel();
  };

  async fetchCreateAdmin(admin) {

    // verify existing email
    const emailExists = await this.adminModel.queryAdminByEmail(admin.email)
    if (emailExists) {
      throw new Error('Email already registered.');
    }

    const saltRounds = 10; //the bigger the safer, but longer to process. 10 is standard, good enough, 14 is strong
    const hashedPassword = await bcrypt.hash(admin.password, saltRounds);

    const adminToCreate = {
      name: admin.name,
      email: admin.email,
      password: hashedPassword,
    };

    const createdAdmin = await this.adminModel.queryCreateAdmin(adminToCreate);
    return createdAdmin;

  };

  async fetchUpdateAdmin(update, id) {

    //TODO PRECISO VOLTAR AQUI PRA PENSAR EM TIRAR O SANITIZE, JÁ QUE VIROU MIDDLEWARE

    // const sanitizedUpdatedAdmin = sanitizeUpdatedAdminData(update);

    // verify existing email
    const emailExists = await this.adminModel.queryAdminByEmail(sanitizedUpdatedAdmin.email)
    if (emailExists) {
      throw new Error('Email already registered.');
    };

    //! falta controle de password

    this.adminModel.queryUpdateAdmin(sanitizedUpdatedAdmin, id);
  };

  //todo CRIAR AQUI UM DELETE PARA CONTROLAR A RESPOSTA QUE TEM QUE DAR O OBJETO DO ADMIN DELETADO


  async fetchLoginAdmin(email, password) {

    const admin = await this.adminModel.queryAdminByEmail(email);
    if (!admin) {
      throw new Error('Wrong e-mail or password.');
    }
    const compare = await bcrypt.compare(password, admin.password);

    if (compare) {
      const token = jwt.sign({
        id: admin.id_admin,
        role: "admin"
      },
        jwtConfig.secret,
        { expiresIn: jwtConfig.expiresIn }
      )
      return token;

    } else {
      throw new Error('Wrong e-mail or password.');
    }
  }
};
