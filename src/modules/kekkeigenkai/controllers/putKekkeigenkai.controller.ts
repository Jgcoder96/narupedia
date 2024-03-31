import { Request, Response } from 'express';
import { methods } from '../services/methods.service';

export const putKekkeigenkai = async (req: Request, res: Response) => {
  try {
    const { id, kekkeigenkai } = req.body;

    const creationResult = await methods.updateKekkeigenkai(id, kekkeigenkai);

    if (!creationResult.exists) {
      res.json({
        res: creationResult.exists,
        message: `not exists records that matches with id: ${id}`,
      });
    } else {
      res.json({
        res: true,
        message: `id: ${id}, kekkeigenkai: ${kekkeigenkai} updated successfully`,
        info: creationResult.result,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
