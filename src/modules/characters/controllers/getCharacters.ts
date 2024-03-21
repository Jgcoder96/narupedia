/* import libreries */
import { Request, Response } from 'express';
/*  */
/* import modules */
import { pool } from '../../../database/script/connection/pool';
import { poolPromise } from '../../../database/script/connection/poolPromise';
/*  */

/* function getCharacters */
export const getCharacters = async (req: Request, res: Response) => {
  const queryPage = req.query.page,
    queryLimit = req.query.limit;

  try {
    if (queryPage && queryLimit) {
      const page = parseInt(JSON.stringify(queryPage).slice(1, -1)),
        limit = parseInt(JSON.stringify(queryLimit).slice(1, -1)),
        offset = (page - 1) * limit;
      const result = await poolPromise([
        await pool.query(
          `SELECT * FROM view_characters LIMIT ${offset}, ${limit};`,
        ),
        await pool.query(`SELECT COUNT(*) AS pages FROM view_characters;`),
      ]);
      const pages = Math.ceil(result[1][0][0]['pages'] / limit);
      result[0][0].map((element) => {
        element['villages'] = JSON.parse(element['villages']);
        element['clans'] = JSON.parse(element['clans']);
        element['kekkeigenkais'] = JSON.parse(element['kekkeigenkais']);
      });
      return res.json({
        characters: result[0][0],
        TotalCharacter: result[1][0][0]['pages'],
        pages,
        page,
      });
    } else {
      const result = await poolPromise([
        await pool.query('SELECT * FROM view_characters;'),
        await pool.query('SELECT COUNT(*) AS pages FROM view_characters;'),
      ]);
      result[0][0].map((element) => {
        element['villages'] = JSON.parse(element['villages']);
        element['clans'] = JSON.parse(element['clans']);
        element['kekkeigenkais'] = JSON.parse(element['kekkeigenkais']);
      });
      return res.json({
        characters: result[0][0],
        TotalCharacter: result[1][0][0]['pages'],
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
/*  */
