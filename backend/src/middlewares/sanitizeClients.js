import { sanitizeInput } from "../utils/sanitize.js";
import validator from 'validator';

//todo REFATORAR. TOO MUCH REPEATED CODE 
export function sanitizeClientData(req, res, next) {
  const errors = [];

  // Individual sanitizing
  const name = sanitizeInput(req.body.name);
  const date_of_birth = sanitizeInput(req.body.date_of_birth);
  const address = sanitizeInput(req.body.address);
  const complement = sanitizeInput(req.body.complement);
  const postal_code = sanitizeInput(String(req.body.postal_code));
  const city = sanitizeInput(req.body.city);
  const phone = sanitizeInput(req.body.phone);
  const email = sanitizeInput(req.body.email);
  const password = sanitizeInput(req.body.password);
  const client_type = sanitizeInput(req.body.client_type);
  const status = "active";
  const fk_id_admin = sanitizeInput(req.body.fk_id_admin);

  // Verifications
  if (!name) errors.push("Name is required.");
  if (!date_of_birth) errors.push("Date of birth is required.");
  if (!address) errors.push("Address is required.");
  if (!postal_code) errors.push("Postal code is required.");
  if (!city) errors.push("City is required.");
  if (!phone) errors.push("Phone number is required.");
  if (!email) errors.push("Email is required.");
  if (!password) errors.push("Password is required.");
  if (!client_type) errors.push("Client type is required.");

  if (!validator.isEmail(email)) errors.push("Invalid email format.");

  if (errors.length > 0) {
    res.status(422).json(errors.join(" "));
  } else {
    req.newClient = { name, date_of_birth, address, complement, postal_code, city, phone, email, password, client_type, status, fk_id_admin };
    next();
  }
}

//todo VERIFICAR SE TÁ OK
export function sanitizeUpdatedClientData(client) {
  const errors = [];
  let inputs = ["name", "date_of_birth", "address", "complement", "postal_code", "city", "phone", "email", "client_type"]

  const sanitized = {};

  // Individual sanitizing
  inputs.forEach((input) => {
    const value = client[input];
    if (value !== undefined && value !== null && value !== "") {
      sanitized[input] = sanitizeInput(value);
    }
  });

  // Verifications
  if (sanitized.email !== "") {
    if (!validator.isEmail(sanitized.email)) errors.push("Invalid email format.");

  }

  if (errors.length > 0) {
    throw new Error(errors.join(" "));
  }


  return sanitized;
}


