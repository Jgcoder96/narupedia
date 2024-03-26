/* import libreries */
import { Request, Response } from 'express';
/*  */
/* import modules */
import { methods } from '../services/methods.service';
/*  */

/* function getVillages */
export const getAllClan = async (_req: Request, res: Response) => {
  try {
    const readResult = await methods.readAllClan();
    if (readResult.exists) {
      return res.json({ clans: readResult.result });
    } else {
      return res.json({
        message: 'not found records to data base',
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
/*  */
