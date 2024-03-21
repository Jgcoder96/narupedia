/* import libreries */
import { Request, Response } from 'express';
/*  */
/* import modules */
import { pool } from '../../../database/script/connection/pool';
import { poolPromise } from '../../../database/script/connection/poolPromise';
/*  */

/* function getVillage */
export const getVillage = async (req: Request, res: Response) => {
  try {
    const villaje_id = req.params.id;
    const result = await poolPromise([
      await pool.query(
        `SELECT * FROM villages WHERE village_id=${villaje_id};`,
      ),
      await pool.query(
        `SELECT * FROM view_characters WHERE villages LIKE '%"id": "${villaje_id}"%';`,
      ),
    ]);
    result[1][0].map((element) => {
      element['villages'] = JSON.parse(element['villages']);
      element['clans'] = JSON.parse(element['clans']);
      element['kekkeigenkais'] = JSON.parse(element['kekkeigenkais']);
    });
    return res.json({
      village_id: result[0][0][0]['village_id'],
      name: result[0][0][0]['village'],
      characters: result[1][0],
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
/*  */
