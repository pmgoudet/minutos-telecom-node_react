import validator from 'validator';

export function sanitizeInput(input) {
  if (typeof input !== 'string') return '';

  let sanitized = input;
  sanitized = sanitized.replace(/\\+/g, '');          // Remove backslashes
  sanitized = sanitized.trim();                       // Remove espaços
  sanitized = validator.stripLow(sanitized);          // Remove chars não-printáveis
  sanitized = validator.escape(sanitized);            // Converte para entidades HTML

  return sanitized;
}



/*
a //? EXEMPLO DE SANITIZE

import { sanitizeInput } from '../utils/sanitize.js';

export function sanitizeAdmin(req, res, next) {
  req.body.name = sanitizeInput(req.body.name);
  req.body.email = sanitizeInput(req.body.email);
  req.body.password = sanitizeInput(req.body.password);
  next(); //! INTERESSANTE AQUI
}

a //? EXEMPLO DE ROUTER

import express from 'express';
import { sanitizeAdmin } from '../middlewares/sanitizeAdmin.js';
import { validateAdmin } from '../middlewares/validateAdmin.js';
import { createAdmin } from '../controllers/adminController.js';

const router = express.Router();

router.post('/admin', sanitizeAdmin, validateAdmin, createAdmin);  //! INTERESSANTE AQUI


*/