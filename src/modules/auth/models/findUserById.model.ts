import { FieldPacket, RowDataPacket } from 'mysql2';
import { getConnection } from '../../../database/script/connection/connection';
import { queries } from '../lib/queries';

export const findUserById = async (id: string) => {
  const connection = await getConnection();
  const result: [RowDataPacket[], FieldPacket[]] = await connection.query(
    queries.selectUserById,
    [id],
  );
  return result;
};
