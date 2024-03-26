import { getConnection } from '../../../database/script/connection/connection';
import { FieldPacket, RowDataPacket } from 'mysql2';
import { queries } from '../queries/queries';

export const findClanByMaxId = async () => {
  const connection = await getConnection();
  const result: [RowDataPacket[], FieldPacket[]] = await connection.query(
    queries.selectClanByMaxId,
  );
  return result;
};
