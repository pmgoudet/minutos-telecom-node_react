import express from 'express';
import adminRoutes from './routes/adminRoutes.js';

const app = express();

app.use(express.json()); // middleware para parsear JSON
app.use('/admins', adminRoutes);

export default app;