import { json } from "express";
import Client from "../models/Client.js";
import ClientModel from "../models/clientModel.js";
import ClientServices from "../services/clientServices.js";


export default class ClientController {

  constructor() {
    this.clientServices = new ClientServices();
    this.clientModel = new ClientModel();
  }

  async getActiveClients(req, res) {
    try {
      const clients = await this.clientModel.queryActiveClients();
      res.status(200).json(clients);
    } catch (err) {
      res.status(500).json({ err: 'Internal Server Error' });
    }
  }

  async getInactiveClients(req, res) {
    try {
      const clients = await this.clientModel.queryInactiveClients();
      res.status(200).json(clients);
    } catch (err) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async getClientById(req, res) {
    try {
      const id = req.params.id;

      //todo gestão de erros
      if (id && Number(id)) {
        const client = await this.clientModel.queryClientById(id);
        if (!client) {
          return res.status(404).send("Client not found");
        }
        res.status(200).json(client);
      } else {
        res.status(422);
        res.send("Invalid ID");
      }

    } catch (err) {
      res.status(500);
      res.send(err.message);
    }
  }

  async createClient(req, res) {
    try {
      const { name, date_of_birth, address, complement, postal_code, city, phone, email, password, client_type, status, fk_id_admin, } = req.body;
      const newClient = new Client({
        id_admin: null,
        name,
        date_of_birth,
        address,
        complement,
        postal_code,
        city,
        phone,
        email,
        password,
        client_type,
        status,
        fk_id_admin,
        registration_date: new Date()
      });
      const createdClient = await this.clientServices.fetchCreateClient(newClient);

      console.log(createdClient)

      res.status(201).json(createdClient);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  }

  async updateClient(req, res) {  //todo JWT para validação do ID
    try {
      const id = req.params.id

      if (id && Number(id)) {
        const { name, date_of_birth, address, complement, postal_code, city, phone, email, client_type } = req.body

        const updatedClient = new Client({
          id_admin: Number(id),
          name,
          date_of_birth,
          address,
          complement,
          postal_code,
          city,
          phone,
          email,
          client_type
        })

        await this.clientServices.fetchUpdateClient(updatedClient, id)

        res.status(201)
        res.send('Client succesfully updated.')
        //todo -> aqui ia ser legal colocar o dado antigo e o novo para dar tempo de copiar se errar
      } else {
        res.status(422)
        res.send("Invalid ID.")
      }

    } catch (error) {
      res.status(500)
      res.send(error.message)
    }
  }

  //todo UPDATE PASSWORD
  // async updateClientPassword(req, res) { 
  // }


  async deleteClient(req, res) {
    try {
      const id = req.params.id;

      if (id && Number(id)) {
        this.clientModel.queryDeleteClient(id);
        res.status(201);
        res.send(`The client of ID:${id} has been disabled.`);
      } else {
        0
        res.status(422)
        res.send("Invalid ID.")
      }

    } catch (error) {
      res.status(500)
      res.send(error.message)
    }
  }

  async restoreClient(req, res) {
    try {
      const id = req.params.id;

      if (id && Number(id)) {
        this.clientModel.queryRestoreClient(id);
        res.status(201);
        res.send(`The client of ID:${id} has been restored.`);
      } else {
        0
        res.status(422)
        res.send("Invalid ID.")
      }

    } catch (error) {
      res.status(500)
      res.send(error.message)
    }
  }
}