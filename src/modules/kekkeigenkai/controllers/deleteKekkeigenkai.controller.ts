/* import libreries */
import { Request, Response } from 'express';
/*  */
/* import modules */
import { methods } from '../services/methods.service';
/*  */

export const deleteKekkeigenkai = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;
    const deleteResult = await methods.deleteKekkeigenkai(id);
    if (!deleteResult.exists) {
      res.json({
        res: deleteResult.exists,
        message: `not exists records that matches with id: ${id}`,
      });
    } else {
      res.json({
        res: true,
        message: `id: ${id} delete successfully`,
        info: deleteResult.result,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
