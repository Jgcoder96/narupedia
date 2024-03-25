import { getConnection } from '../../../database/script/connection/connection';
import { FieldPacket, RowDataPacket } from 'mysql2';
import { queries } from '../queries/queries';

export const findKekkeigenkaiByLikeId = async (id: number) => {
  const connection = await getConnection();
  const result: [RowDataPacket[], FieldPacket[]] = await connection.query(
    queries.selectKekkeigenkaiByLikeId,
    [id],
  );
  return result;
};
