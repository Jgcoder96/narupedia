import { getConnection } from '../../../database/script/connection/connection';
import { FieldPacket, RowDataPacket } from 'mysql2';
import { QUERIES } from '../libs/queries';

export const findKekkeigenkaiByMaxId = async () => {
  const connection = await getConnection();
  const result: [RowDataPacket[], FieldPacket[]] = await connection.query(
    QUERIES.selectKekkeigenkaiByMaxId,
  );
  return result;
};
