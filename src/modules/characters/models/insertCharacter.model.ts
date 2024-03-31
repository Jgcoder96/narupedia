import { FieldPacket, RowDataPacket } from 'mysql2';
import { getConnection } from '../../../database/script/connection/connection';
import { queries } from '../queries/queries';

export const insertCharacter = async (
  id: number,
  character: string,
  image: string,
) => {
  const connection = await getConnection();
  const result: [RowDataPacket[], FieldPacket[]] = await connection.query(
    queries.insertCharacter,
    [id, character, image],
  );
  return result;
};
