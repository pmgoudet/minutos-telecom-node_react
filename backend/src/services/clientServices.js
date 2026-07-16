// import { sanitizeClientData, sanitizeUpdatedClientData } from "../middlewares/sanitizeClients.js";
import ClientModel from "../models/clientModel.js";
// import AdminModel from "../models/adminModel.js"; 
import bcrypt from 'bcrypt';

export default class ClientServices {

  constructor() {
    this.clientModel = new ClientModel();
  };

  async fetchActiveClients() {
    this.clientModel.queryActiveClients()
  };

  async fetchInactiveClients() {
    this.clientModel.queryInactiveClients()
  };

  async fetchClientById() {
    this.clientModel.queryClientById()
  };

  async fetchCreateClient(client) {

    const errors = [];

    // verify date of birth
    const birthDate = new Date(client.date_of_birth);
    const age = new Date().getFullYear() - birthDate.getFullYear();
    if (isNaN(birthDate.getTime())) errors.push("Invalid date of birth.");
    if (age < 18) errors.push("Client must be at least 18 years old.");

    //verify postal code
    if (!/^\d{5}$/.test(client.postal_code)) errors.push("Invalid postal code.");

    //verify phone number
    const cleanPhone = client.phone.replace(/[\s-]/g, '');
    if (!/^(\+33|0)[67][0-9]{8}$/.test(cleanPhone)) errors.push("Invalid French phone number.");
    //todo não estou certo do código. todo telefone começa com 06 ou 07? É isso que o regex diz ou eu entendi errado?

    // verify existing email
    const emailExists = await this.clientModel.queryClientByEmail(client.email)
    if (emailExists) {
      throw new Error('Email already registered.');
    }

    const saltRounds = 10; //the bigger the safer, but longer to process. 10 is standard, good enough, 14 is strong
    const hashedPassword = await bcrypt.hash(client.password, saltRounds);

    const clientToCreate = {
      name: client.name,
      date_of_birth: client.date_of_birth,
      address: client.address,
      complement: client.complement,
      postal_code: client.postal_code,
      city: client.city,
      phone: client.phone,
      email: client.email,
      password: hashedPassword,
      client_type: client.client_type,
      status: "active",
      fk_id_admin: client.fk_id_admin,
      registration_date: client.registration_date
    };


    if (errors.length > 0) {
      throw new Error(errors.join(" "));
    } else {
      const createdClient = await this.clientModel.queryCreateClient(clientToCreate);
      return createdClient;
    }
  };

  async fetchUpdateClient(update, id) {

    //TODO PRECISO VOLTAR AQUI PRA PENSAR EM TIRAR O SANITIZE, JÁ QUE VIROU MIDDLEWARE

    // const sanitizedUpdatedClient = sanitizeUpdatedClientData(update);

    // verify existing email
    const emailExists = await this.clientModel.queryClientByEmail(sanitizedUpdatedClient.email)
    if (emailExists) {
      throw new Error('Email already registered.');
    }

    // verify date
    const birthDate = new Date(sanitizedUpdatedClient.date_of_birth);
    const age = new Date().getFullYear() - birthDate.getFullYear();
    if (isNaN(birthDate.getTime())) errors.push("Invalid date of birth.");
    if (age < 18) errors.push("Client must be at least 18 years old.");

    //verify postal code
    if (!/^\d{5}$/.test(sanitizedUpdatedClient.postal_code)) errors.push("Invalid postal code.");

    //verify client type
    if (!['residential', 'corporate'].includes(sanitizedUpdatedClient.client_type)) errors.push("Invalid client type.");

    this.clientModel.queryUpdateClient(sanitizedUpdatedClient, id);
  };

  async fetchDeleteClient() {
    this.clientModel.queryDeleteClient()

    //todo CRIAR AQUI UM DELETE PARA CONTROLAR A RESPOSTA QUE TEM QUE DAR O OBJETO DO ADMIN DELETADO
    //todo REGISTER EACH MODIFICATION AND THE ID OD THE ADMIN WHO'S DONE THAT
  };

  async fetchRestoreClient() {
    this.clientModel.queryRestoreClient()

    //todo REGISTER EACH MODIFICATION AND THE ID OD THE ADMIN WHO'S DONE THAT
  };




};