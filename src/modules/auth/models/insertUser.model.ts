import { FieldPacket, RowDataPacket } from 'mysql2';
import { getConnection } from '../../../database/script/connection/connection';
import { queries } from '../lib/queries';

export const insertUser = async (
  username: string,
  email: string,
  password: string,
) => {
  const connection = await getConnection();
  const result: [RowDataPacket[], FieldPacket[]] = await connection.query(
    queries.insertUser,
    [username, email, password],
  );
  return result;
};
