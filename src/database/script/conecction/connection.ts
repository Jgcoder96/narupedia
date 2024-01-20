import mysql from 'mysql2/promise';
import config from '../../../config/config';

const connection = mysql.createConnection({
  host: config.host,
  database: config.database,
  user: config.user,
  password: config.password,
});

export const getConnection = async () => {
  return await connection;
};
