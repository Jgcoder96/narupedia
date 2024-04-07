import { FieldPacket, RowDataPacket } from 'mysql2';
import { getConnection } from '../../../database/script/connection/connection';
import { queries } from '../lib/queries';

export const findUserByUsername = async (username: string) => {
  const connection = await getConnection();
  const result: [RowDataPacket[], FieldPacket[]] = await connection.query(
    queries.selectUserByUsername,
    [username],
  );
  return result;
};
