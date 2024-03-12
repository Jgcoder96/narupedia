/* import libreries */
import mysql from 'mysql2/promise';
/* import modules */
import config from '../../../config/config';

/* connection to data base */
export const pool = mysql.createPool({
  host: config.host,
  database: config.database,
  user: config.user,
  password: config.password,
});
