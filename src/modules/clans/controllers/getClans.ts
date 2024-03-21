/* import libreries */
import { Request, Response } from 'express';
/*  */
/* import modules */
import { getConnection } from '../../../database/script/connection/connection';
/*  */

/* function getClans */
export const getClans = async (_req: Request, res: Response) => {
  try {
    const connection = await getConnection();
    const result = await connection.query('SELECT * FROM clans;');
    return res.json(result[0]);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
/*  */
