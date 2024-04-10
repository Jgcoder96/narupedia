import { FieldPacket, RowDataPacket } from 'mysql2';
import { getConnection } from '../../../database/script/connection/connection';
import { QUERIES } from '../lib/queries';

export const insertRolWithUser = async (rol: number, userId: string) => {
  const connection = await getConnection();
  const result: [RowDataPacket[], FieldPacket[]] = await connection.query(
    QUERIES.insertRol,
    [rol, userId],
  );
  return result;
};
