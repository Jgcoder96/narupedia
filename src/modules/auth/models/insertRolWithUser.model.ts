import { FieldPacket, RowDataPacket } from 'mysql2';
import { getConnection } from '../../../database/script/connection/connection';
import { queries } from '../lib/queries';

export const insertRolWithUser = async (rol: number, userId: string) => {
  const connection = await getConnection();
  const result: [RowDataPacket[], FieldPacket[]] = await connection.query(
    queries.insertRol,
    [rol, userId],
  );
  return result;
};
