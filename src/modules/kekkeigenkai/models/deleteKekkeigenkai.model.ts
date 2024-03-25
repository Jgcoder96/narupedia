import { getConnection } from '../../../database/script/connection/connection';
import { queries } from '../queries/queries';
import { FieldPacket, RowDataPacket } from 'mysql2';

export const deleteKekkeigenkai = async (id: number) => {
  const connection = await getConnection();
  const result: [RowDataPacket[], FieldPacket[]] = await connection.query(
    queries.deleteKekkeigenkai,
    [id],
  );
  return result;
};
