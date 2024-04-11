import { getConnection } from '../../../database/script/connection/connection';
import { QUERIES } from '../libs/queries';
import { FieldPacket, RowDataPacket } from 'mysql2';

export const deleteKekkeigenkai = async (id: number) => {
  const connection = await getConnection();
  const result: [RowDataPacket[], FieldPacket[]] = await connection.query(
    QUERIES.deleteKekkeigenkai,
    [id],
  );
  return result;
};
