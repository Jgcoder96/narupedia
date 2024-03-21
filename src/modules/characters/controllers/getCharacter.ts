/* import libreries */
import { Request, Response } from 'express';
/*  */
/* import modules */
import { getConnection } from '../../../database/script/connection/connection';
/*  */

/* function getCharacter */
export const getCharacter = async (req: Request, res: Response) => {
  try {
    const connection = await getConnection();
    const character_id = req.params.id;
    const result = await connection.query(
      `SELECT * FROM view_characters WHERE character_id=${character_id};`,
    );
    return res.json(result[0]);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
/*  */
