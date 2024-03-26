/* import libreries */
import { Request, Response } from 'express';
/*  */
/* import modules */
import { methods } from '../services/methods.service';
/*  */

export const postClan = async (req: Request, res: Response) => {
  try {
    const { clan } = req.body;
    const creationResult = await methods.createClan(clan);
    if (creationResult.exists) {
      res.json({
        res: false,
        message: `clan: ${clan} exists in the database`,
        record: creationResult.record,
      });
    } else {
      res.json({
        res: true,
        message: `clan: ${clan} was inserted correctly`,
        info: creationResult.result,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
