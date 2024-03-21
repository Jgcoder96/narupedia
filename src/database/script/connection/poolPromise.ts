/* import libreries */
import { FieldPacket, RowDataPacket } from 'mysql2';
/*  */

/* function  poolPromise */
export const poolPromise = async (
  arrayQuery: [RowDataPacket[], FieldPacket[]][],
) => {
  const result: [RowDataPacket[], FieldPacket[]][] =
    await Promise.all(arrayQuery);
  return result;
};
/*  */
