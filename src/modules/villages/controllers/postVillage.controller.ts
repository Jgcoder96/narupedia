/* import libreries */
import { Request, Response } from 'express';
/*  */
/* import modules */
import { methods } from '../services/methods.service';
/*  */

export const postVillage = async (req: Request, res: Response) => {
  try {
    const { village } = req.body;
    const creationResult = await methods.createVillage(village);
    if (creationResult.exists) {
      res.json({
        res: false,
        message: `village: ${village} exists in the database`,
        record: creationResult.record,
      });
    } else {
      res.json({
        res: true,
        message: `village: ${village} was inserted correctly`,
        info: creationResult.result,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
