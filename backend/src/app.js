import express from 'express';
import adminRoutes from './routes/adminRoutes.js';
import clientRoutes from './routes/clientRoutes.js';

const app = express();

app.use(express.json()); // middleware para parsear JSON
app.use('/admins', adminRoutes);
app.use('/clients', clientRoutes);

export default app;