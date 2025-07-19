import { sanitizeInput } from "../utils/sanitize.js";
import validator from 'validator'; //! NAO TO CERTO DISSO


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





/* 

a //? PASSWORD CONTROL

if (password.length < 8) errors.push("Password must be at least 8 characters long.");
if (!/[A-Z]/.test(password)) errors.push("Password must contain at least one uppercase letter.");
if (!/[a-z]/.test(password)) errors.push("Password must contain at least one lowercase letter.");
if (!/[0-9]/.test(password)) errors.push("Password must contain at least one number.");



a //? Client type CONTROL


a //? STATUs CONTROL
if (!['active', 'inactive'].includes(status)) errors.push("Invalid status.");

*/