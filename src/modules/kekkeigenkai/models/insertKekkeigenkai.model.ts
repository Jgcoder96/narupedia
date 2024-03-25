import { getConnection } from '../../../database/script/connection/connection';
import { queries } from '../queries/queries';
import { FieldPacket, RowDataPacket } from 'mysql2';

export const insertKekkeigenkai = async (id: number, kekkeigenkai: string) => {
  const connection = await getConnection();
  const result: [RowDataPacket[], FieldPacket[]] = await connection.query(
    queries.insertKekkeigenkai,
    [id, kekkeigenkai],
  );
  return result;
};
