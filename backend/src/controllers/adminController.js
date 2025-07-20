import { json } from "express";
import Admin from "../models/Admin.js";
import AdminModel from "../models/adminModel.js";
import AdminServices from "../services/adminServices.js";


export default class AdminController {

  constructor() {
    this.adminServices = new AdminServices();
    this.adminModel = new AdminModel();
  }

  async getActiveAdmins(req, res) {
    try {
      const admins = await this.adminModel.queryActiveAdmins();
      res.status(200).json(admins);
    } catch (err) {
      res.status(500).json({ err: 'Internal Server Error' });
    }
  }

  async getInactiveAdmins(req, res) {
    try {
      const admins = await this.adminModel.queryInactiveAdmins();
      res.status(200).json(admins);
    } catch (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getAdminById(req, res) {
    try {
      const id = req.params.id;

      //todo gestão de erros
      if (id && Number(id)) {
        const admin = await this.adminModel.queryAdminById(id);
        if (!admin) {
          return res.status(404).send("Admin not found");
        }
        res.status(200).json(admin);
      } else {
        res.status(422);
        res.send("Invalid ID");
      }

    } catch (err) {
      res.status(500);
      res.send(err.message);
    }
  }

  async createAdmin(req, res) {
    try {

      const { name, email, password, status } = req.body;
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

  async updateAdmin(req, res) {  //todo JWT para validação do ID
    try {
      const id = req.params.id

      if (id && Number(id)) {
        const update = req.body
        await this.adminServices.fetchUpdateAdmin(update, id)

        res.status(201)
        res.send(`Admin succesfully updated.`)
      } else {
        res.status(422)
        res.send("Invalid ID.")
      }

    } catch (error) {
      res.status(500)
      res.send(error.message)
    }
  }

  async deleteAdmin(req, res) {

    try {
      const id = req.params.id;

      if (id && Number(id)) {
        await this.adminModel.queryDeleteAdmin(id);
        res.status(201);
        res.send(`The admin of ID:${id} has been disabled. ${json(this.adminModel)}`);
      } else {
        res.status(422)
        res.send("Invalid ID.")
      }

    } catch (error) {
      res.status(500)
      res.send(error.message)
    }
  }
}