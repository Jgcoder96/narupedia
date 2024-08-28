import { pool } from '../database/script/connection/pool';
import { RowDataPacket } from 'mysql2';
export const getMethodsAndRoles = async () => {
  const result = await Promise.all([
    pool.query(`SELECT * FROM methods_by_roles WHERE rol = 'ADMIN';`),
    pool.query(`SELECT * FROM methods_by_roles WHERE rol = 'USER';`),
  ]);
  const admin = result[0][0] as RowDataPacket[];
  const user = result[1][0] as RowDataPacket[];
  return [admin, user];
};
