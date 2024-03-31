import { Request, Response } from 'express';
import { methods } from '../services/methods.service';

export const putClan = async (req: Request, res: Response) => {
  try {
    const { id, clan } = req.body;
    const creationResult = await methods.updateClan(id, clan);
    if (!creationResult.exists) {
      res.json({
        res: creationResult.exists,
        message: `not exists records that matches with id: ${id}`,
      });
    } else {
      res.json({
        res: true,
        message: `id: ${id}, clan: ${clan} updated successfully`,
        info: creationResult.result,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
