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
export function sanitizeUpdatedAdminData(req, res, next) {
  const errors = [];
  const name = req.body.name;
  const email = req.body.email;
  let newName = "";
  let newEmail = "";

  // Individual sanitizing
  if (name) {
    newName = sanitizeInput(name);
  }

  if (email) {
    newEmail = sanitizeInput(email);
    if (!validator.isEmail(newEmail)) {
      errors.push("Invalid email format.");
    }
  }

  if (errors.length > 0) {
    res.status(422).json(errors.join(" "));
  } else {
    req.updatedAdmin = { name: newName, email: newEmail }
  };
  next();
}

export function sanitizeUpdatedPasswordAdmin(req, res, next) {
  const errors = [];

  // Individual sanitizing
  const newPassword = sanitizeInput(req.body.password);
  console.log(newPassword)
  const confirmNewPassword = sanitizeInput(req.body.confirmPassword);

  // Verifications
  if (!newPassword || !confirmNewPassword) errors.push("Both fields are required.");

  if (newPassword !== confirmNewPassword) {
    res.status(400).send("Password confirmation does not match.")
  } else {
    if (errors.length > 0) {
      res.status(422).json(errors.join(" "));
    } else {
      req.newAdminPassword = { newPassword };
      next();
    }
  }
}