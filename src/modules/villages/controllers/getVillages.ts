/* import libreries */
import { Request, Response } from 'express';
/*  */
/* import modules */
import { getConnection } from '../../../database/script/connection/connection';
/*  */

/* function getVillages */
export const getVillages = async (_req: Request, res: Response) => {
  try {
    const connection = await getConnection();
    const result = await connection.query('SELECT * FROM villages;');
    return res.json(result[0]);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
/*  */
