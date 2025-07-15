import mysql from 'mysql2/promise';
import 'dotenv/config';

const connect = async () => {
  if (global.connection && global.connection.state != 'disconnected') // isso aqui é questionável, tem outro jeito de fazer testando o ping
    return global.connection

  const con = await mysql.createConnection(process.env.DB_URL)
  console.log('Successful connection')
  global.connection = con
  return con
}

export default connect;
