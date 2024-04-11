import { getConnection } from '../../../database/script/connection/connection';
import { QUERIES } from '../libs/queries';
import { FieldPacket, RowDataPacket } from 'mysql2';

export const updateKekkeigenkai = async (id: number, kekkeigenkai: string) => {
  const connection = await getConnection();
  const result: [RowDataPacket[], FieldPacket[]] = await connection.query(
    QUERIES.updateKekkeigenkai,
    [kekkeigenkai, id],
  );
  return result;
};
