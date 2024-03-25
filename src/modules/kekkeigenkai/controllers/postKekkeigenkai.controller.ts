/* import libreries */
import { Request, Response } from 'express';
/*  */
/* import modules */
import { methods } from '../services/methods.service';
/*  */

export const postKekkeigenkai = async (req: Request, res: Response) => {
  try {
    const { kekkeigenkai } = req.body;
    const creationResult = await methods.createKekkeigenkai(kekkeigenkai);
    if (creationResult.exists) {
      res.json({
        res: false,
        message: `kekkeigenkai: ${kekkeigenkai} exists in the database`,
        record: creationResult.record,
      });
    } else {
      res.json({
        res: true,
        message: `kekkeigenkai: ${kekkeigenkai} was inserted correctly`,
        info: creationResult.result,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
