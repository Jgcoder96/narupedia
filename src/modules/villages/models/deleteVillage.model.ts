import { FieldPacket, RowDataPacket } from 'mysql2';
import { getConnection } from '../../../database/script/connection/connection';
import { QUERIES } from '../libs/queries';

export const deleteVillage = async (id: number) => {
  const connection = await getConnection();
  const result: [RowDataPacket[], FieldPacket[]] = await connection.query(
    QUERIES.deleteVillage,
    [id],
  );
  return result;
};
