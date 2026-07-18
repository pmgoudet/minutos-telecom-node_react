import { json } from "express";
import Admin from "../models/Admin.js";
import AdminModel from "../models/adminModel.js";
import AdminServices from "../services/adminServices.js";


export default class AdminController {

  constructor() {
    this.adminServices = new AdminServices();
    this.adminModel = new AdminModel();
  }

  //!OK
  async getActiveAdmins(req, res) {
    try {
      const adminsQuery = await this.adminModel.queryActiveAdmins();
      const admins = adminsQuery.map(admin => new Admin(admin));

      res.status(200).json(admins);
    } catch (err) {
      res.status(500).json({ err: 'Internal Server Error' });
    }
  }

  async getInactiveAdmins(req, res) {
    try {
      const adminsQuery = await this.adminModel.queryInactiveAdmins();
      const admins = adminsQuery.map(admin => new Admin(admin));

      res.status(200).json(admins);
    } catch (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  //!OK
  async getAdminById(req, res) {
    try {
      const id = req.params.id;

      if (id && Number(id)) {
        const adminQuery = await this.adminModel.queryAdminById(id);
        if (!adminQuery) {
          return res.status(404).send("Admin not found");
        }

        const admin = new Admin(adminQuery);
        res.status(200).json(admin);
      } else {
        res.status(422);
        res.send("Invalid ID");
      }

    } catch (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  //!OK
  async createAdmin(req, res) {
    try {

      const { name, email, password, status } = req.newAdmin;
      const newAdmin = new Admin({
        id_admin: null,
        name,
        email,
        status,
        password,
        registration_date: new Date()
      });
      const createdAdmin = await this.adminServices.fetchCreateAdmin(newAdmin);
      res.status(201).json(createdAdmin);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  }

  //todo JWT para validação do ID
  async updateAdmin(req, res) {
    try {
      const id = req.params.id

      if (id && Number(id)) {
        const { name, email } = req.body
        const updatedAdmin = new Admin({
          id_admin: Number(id),
          name,
          email
        });

        await this.adminServices.fetchUpdateAdmin(updatedAdmin, id);

        res.status(201)
        res.send(`Admin succesfully updated.`)
      } else {
        res.status(422)
        res.send("Invalid ID.")
      }

    } catch (error) {
      res.status(500).send(error.message)
    }
  }

  //todo UPDATE PASSWORD
  // async updateAdminPassword(req, res) { 
  // }


  //!todo AQUI SÓ FALTA DEVOLVER O NOME DO CLIENTE JUNTO COM O ID POR UX
  async deleteAdmin(req, res) {

    try {
      const id = req.params.id;

      if (id && Number(id)) {
        await this.adminModel.queryDeleteAdmin(id);
        res.status(201);
        res.send(`The admin of ID:${id} has been disabled.`);
      } else {
        res.status(422)
        res.send("Invalid ID.")
      }

    } catch (error) {
      res.status(500)
      res.send(error.message)
    }
  }

  //!OK
  async restoreAdmin(req, res) {
    try {
      const id = req.params.id;

      if (id && Number(id)) {
        this.adminModel.queryRestoreAdmin(id);
        res.status(201);
        res.send(`The admin of ID:${id} has been restored.`);
      } else {
        0
        res.status(422).send("Invalid ID.");
      }

    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  //TODO
  async loginAdmin(req, res) {
    try {
      const email = req.body.email;
      const password = req.body.password;
      const logAdmin = await this.adminServices.fetchLoginAdmin(email, password);

      res.status(200).send(logAdmin)
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}
