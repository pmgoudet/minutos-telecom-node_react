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

export function sanitizeAdminData(admin) {
  const errors = [];

  // Sanitização individual
  const name = sanitizeInput(admin.name);
  const email = sanitizeInput(admin.email);
  const password = sanitizeInput(admin.password);

  // Verificações
  if (!name) errors.push("Name is required.");
  if (!email) errors.push("Email is required.");
  if (!password) errors.push("Password is required.");
  if (!validator.isEmail(email)) errors.push("Invalid email format.");

  if (errors.length > 0) {
    throw new Error(errors.join(" "));
  }

  return { name, email, password };
}
