/* import libreries */
import { Request, Response } from 'express';
/*  */
/* import modules */
import { methods } from '../services/methods.service';
/*  */

export const putVillage = async (req: Request, res: Response) => {
  try {
    const { id, village } = req.body;
    const creationResult = await methods.updateVillage(id, village);
    if (!creationResult.exists) {
      res.json({
        res: creationResult.exists,
        message: `not exists records that matches with id: ${id}`,
      });
    } else {
      res.json({
        res: true,
        message: `id: ${id}, village: ${village} updated successfully`,
        info: creationResult.result,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
