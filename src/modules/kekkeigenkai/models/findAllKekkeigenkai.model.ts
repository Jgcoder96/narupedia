import { getConnection } from '../../../database/script/connection/connection';
import { FieldPacket, RowDataPacket } from 'mysql2';
import { QUERIES } from '../libs/queries';

export const findAllKekkeigenkai = async () => {
  const connection = await getConnection();
  const result: [RowDataPacket[], FieldPacket[]] = await connection.query(
    QUERIES.selectAllKekkeigenkai,
  );
  return result;
};
