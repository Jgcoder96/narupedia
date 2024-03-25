import { getConnection } from '../../../database/script/connection/connection';
import { queries } from '../queries/queries';
import { FieldPacket, RowDataPacket } from 'mysql2';

export const insertVillage = async (id: number, village: string) => {
  const connection = await getConnection();
  console.log(queries.insertVillage);
  const result: [RowDataPacket[], FieldPacket[]] = await connection.query(
    queries.insertVillage,
    [id, village],
  );
  return result;
};
