import { sanitizeClientData } from "../middlewares/sanitizeClients.js";
import ClientModel from "../models/clientModel.js";
// import AdminModel from "../models/adminModel.js"; 
import bcrypt from 'bcrypt';

export default class ClientServices {

  constructor() {
    this.clientModel = new ClientModel();
    // this.adminModel = new AdminModel();
  }

  async fetchActiveClients() {
    this.clientModel.queryActiveClients()
  }

  async fetchInactiveClients() {
    this.clientModel.queryInactiveClients()
  }

  async fetchClientById() {
    this.clientModel.queryClientById()
  }

  async fetchCreateClient(client) {

    // sanitize
    const sanitizedClient = sanitizeClientData(client);

    // verify date of bi
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
    const emailExists = await this.clientModel.queryClientByEmail(sanitizedClient.email)
    if (emailExists) {
      throw new Error('Email already registered.');
    }

    const saltRounds = 10; //the bigger the safer, but longer to process. 10 is standard, good enough, 14 is strong
    const hashedPassword = await bcrypt.hash(sanitizedClient.password, saltRounds);

    const clientToCreate = {
      name: sanitizedClient.name,
      date_of_birth: sanitizedClient.date_of_birth,
      address: sanitizedClient.address,
      complement: sanitizedClient.complement,
      postal_code: sanitizedClient.postal_code,
      city: sanitizedClient.city,
      phone: sanitizedClient.phone,
      email: sanitizedClient.email,
      password: hashedPassword,
      client_type: sanitizedClient.client_type,
      status: sanitizedClient.status,
      fk_id_admin: sanitizedClient.fk_id_admin,
      registration_date: sanitizedClient.registration_date
    };

    const createdClient = await this.clientModel.queryCreateClient(clientToCreate);
    return createdClient;
  };

  async fetchUpdateClient(update, id) {
    //todo CONTROLE DE TUDO

    // this.ClientModel.queryUpdateClient(update, id)
  }

  //todo CRIAR AQUI UM DELETE PARA CONTROLAR A RESPOSTA QUE TEM QUE DAR O OBJETO DO ADMIN DELETADO
}