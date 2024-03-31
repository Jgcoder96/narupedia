import { FieldPacket, RowDataPacket } from 'mysql2';
import { getConnection } from '../../../database/script/connection/connection';
import { queries } from '../queries/queries';

export const findAllCharacterWithPageAndLimit = async (
  offset: number,
  limit: number,
) => {
  const connection = await getConnection();
  const result: [RowDataPacket[], FieldPacket[]] = await connection.query(
    queries.selectAllCharacterWithPageAndLimit,
    [offset, limit],
  );
  return result;
};
