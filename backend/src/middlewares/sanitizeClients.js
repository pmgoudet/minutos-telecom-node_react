import { sanitizeInput } from "../utils/sanitize.js";
import validator from 'validator';


export function sanitizeClientData(client) {
  const errors = [];

  // Sanitização individual
  const name = sanitizeInput(client.name);
  const date_of_birth = sanitizeInput(client.date_of_birth);
  const address = sanitizeInput(client.address);
  const complement = sanitizeInput(client.complement);
  const postal_code = sanitizeInput(String(client.postal_code));
  const city = sanitizeInput(client.city);
  const phone = sanitizeInput(client.phone);
  const email = sanitizeInput(client.email);
  const password = sanitizeInput(client.password);
  const client_type = sanitizeInput(client.client_type);
  const status = sanitizeInput(client.status);
  const fk_id_admin = sanitizeInput(client.fk_id_admin);

  // Verificações
  if (!name) errors.push("Name is required.");
  if (!date_of_birth) errors.push("Date of birth is required.");
  if (!address) errors.push("Address is required.");
  if (!postal_code) errors.push("Postal code is required.");
  if (!city) errors.push("City is required.");
  if (!phone) errors.push("Phone number is required.");
  if (!email) errors.push("Email is required.");
  if (!password) errors.push("Password is required.");
  if (!client_type) errors.push("Client type is required.");
  if (!password) errors.push("Password is required.");

  if (!validator.isEmail(email)) errors.push("Invalid email format.");

  if (errors.length > 0) {
    throw new Error(errors.join(" "));
  }

  return { name, date_of_birth, address, complement, postal_code, city, phone, email, password, client_type, status, fk_id_admin };
}
