import { getConnection } from '../../../database/script/connection/connection';
import { queries } from '../queries/queries';
import { FieldPacket, RowDataPacket } from 'mysql2';

export const insertClan = async (id: number, clan: string) => {
  const connection = await getConnection();
  const result: [RowDataPacket[], FieldPacket[]] = await connection.query(
    queries.insertClan,
    [id, clan],
  );
  return result;
};
