import { Request, Response } from 'express';
import { methods } from '../services/methods.service';

export const deleteVillage = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;

    const deleteResult = await methods.deleteVillage(id);

    if (!deleteResult.exists) {
      res.status(404).json({
        res: deleteResult.exists,
        message: `not exists records that matches with id: ${id}`,
      });
    } else {
      res.json({
        res: deleteResult.exists,
        message: `id: ${id} delete successfully`,
        info: deleteResult.result,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
