import { sanitizeInput } from "../utils/sanitize.js";
import validator from 'validator';

export function sanitizeAdminData(req, res, next) {
  const errors = [];

  // Individual sanitizing
  const name = sanitizeInput(req.body.name);
  const email = sanitizeInput(req.body.email);
  const password = sanitizeInput(req.body.password);

  // Verifications
  if (!name) errors.push("Name is required.");
  if (!email) errors.push("Email is required.");
  if (!password) errors.push("Password is required.");

  if (!validator.isEmail(email)) errors.push("Invalid email format.");

  if (errors.length > 0) {
    res.status(422).json(errors.join(" "));
  } else {
    req.newAdmin = { name, email, password };
    next();
  }

}

//todo VERIFICAR SE TÁ OK
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
