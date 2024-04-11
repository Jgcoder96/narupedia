import { getConnection } from '../../../database/script/connection/connection';
import { QUERIES } from '../libs/queries';
import { FieldPacket, RowDataPacket } from 'mysql2';

export const insertKekkeigenkai = async (id: number, kekkeigenkai: string) => {
  const connection = await getConnection();
  const result: [RowDataPacket[], FieldPacket[]] = await connection.query(
    QUERIES.insertKekkeigenkai,
    [id, kekkeigenkai],
  );
  return result;
};
