import 'dotenv/config';
import connect from './src/config/dbconnect.js';
import app from './src/app.js';

const port = 3000;

const startServer = async () => {
  try {
    await connect();
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (err) {
    console.error('Failed to connect to the database:', err);
    process.exit(1); // encerra o processo com erro
  }
};

startServer();
