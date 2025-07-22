import { sanitizeInput } from "../utils/sanitize.js";
import validator from 'validator';

//todo Esta função deveria ser dividida em dois middlewares:
// 1  middlewares/sanitize.js
// 2  middlewares/validate.js

export function sanitizeAdminData(admin) {
  const errors = [];

  // Individual sanitizing
  const name = sanitizeInput(admin.name);
  const email = sanitizeInput(admin.email);
  const password = sanitizeInput(admin.password);

  // Verifications
  if (!name) errors.push("Name is required.");
  if (!email) errors.push("Email is required.");
  if (!password) errors.push("Password is required.");

  if (!validator.isEmail(email)) errors.push("Invalid email format.");

  if (errors.length > 0) {
    throw new Error(errors.join(" "));
  }

  return { name, email, password };
}

export function sanitizeUpdatedAdminData(admin) {
  const errors = [];
  let name, email, password;

  // Individual sanitizing
  if (admin.name) {
    name = sanitizeInput(admin.name);
  }
  if (admin.email) {
    console.log("EMAIL RECEBIDO:", admin.email);
    email = sanitizeInput(admin.email);
    if (!validator.isEmail(email)) errors.push("Invalid email format.");
  }

  //todo if (admin.password) {
  //   password = sanitizeInput(admin.password);
  // }

  if (errors.length > 0) {
    throw new Error(errors.join(" "));
  }

  return { name, email, password };
}
