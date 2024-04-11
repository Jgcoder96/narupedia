import { getConnection } from '../../../database/script/connection/connection';
import { FieldPacket, RowDataPacket } from 'mysql2';
import { QUERIES } from '../libs/queries';

export const findKekkeigenkaiById = async (id: number) => {
  const connection = await getConnection();
  const result: [RowDataPacket[], FieldPacket[]] = await connection.query(
    QUERIES.selectKekkeigenkaiById,
    [id],
  );
  return result;
};
