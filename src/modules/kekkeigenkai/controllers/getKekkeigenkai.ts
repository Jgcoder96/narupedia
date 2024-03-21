/* import libreries */
import { Request, Response } from 'express';
/*  */
/* import modules */
import { pool } from '../../../database/script/connection/pool';
import { poolPromise } from '../../../database/script/connection/poolPromise';
/*  */

/* function getkekkeigenkai */
export const getKekkeigenkai = async (req: Request, res: Response) => {
  try {
    const kekkeigenkai_id = req.params.id;
    const result = await poolPromise([
      await pool.query(
        `SELECT * FROM kekkeigenkais WHERE kekkeigenkai_id=${kekkeigenkai_id};`,
      ),
      await pool.query(
        `SELECT * FROM view_characters WHERE kekkeigenkais LIKE '%"id": "${kekkeigenkai_id}"%';`,
      ),
    ]);
    result[1][0].map((element) => {
      element['villages'] = JSON.parse(element['villages']);
      element['clans'] = JSON.parse(element['clans']);
      element['kekkeigenkais'] = JSON.parse(element['kekkeigenkais']);
    });
    return res.json({
      clan_id: result[0][0][0]['kekkeigenkai_id'],
      name: result[0][0][0]['kekkeigenkai'],
      characters: result[1][0],
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
/*  */
