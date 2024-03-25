import { getConnection } from '../../../database/script/connection/connection';
import { FieldPacket, RowDataPacket } from 'mysql2';
import { queries } from '../queries/queries';

export const findKekkeigenkaiByName = async (kekkeigenkai: string) => {
  const connection = await getConnection();
  const result: [RowDataPacket[], FieldPacket[]] = await connection.query(
    queries.selectKekkeigenkaiByName,
    [kekkeigenkai],
  );
  return result;
};
