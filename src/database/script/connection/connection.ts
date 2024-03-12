/* import libreries */
import mysql from 'mysql2/promise';
/* import modules */
import config from '../../../config/config';
/*  */

/* connection to data base */
const connection = mysql.createConnection({
  host: config.host,
  database: config.database,
  user: config.user,
  password: config.password,
});

export const getConnection = async () => {
  return await connection;
};
