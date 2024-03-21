/* import libreries */
import { Request, Response } from 'express';
/*  */
/* import modules */
import { pool } from '../../../database/script/connection/pool';
import { poolPromise } from '../../../database/script/connection/poolPromise';
/*  */

/* function getClan */
export const getClan = async (req: Request, res: Response) => {
  try {
    const clan_id = req.params.id;
    const result = await poolPromise([
      await pool.query(`SELECT * FROM clans WHERE clan_id=${clan_id};`),
      await pool.query(
        `SELECT * FROM view_characters WHERE clans LIKE '%"id": "${clan_id}"%';`,
      ),
    ]);
    result[1][0].map((element) => {
      element['villages'] = JSON.parse(element['villages']);
      element['clans'] = JSON.parse(element['clans']);
      element['kekkeigenkais'] = JSON.parse(element['kekkeigenkais']);
    });
    return res.json({
      clan_id: result[0][0][0]['clan_id'],
      name: result[0][0][0]['clan'],
      characters: result[1][0],
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
/*  */
