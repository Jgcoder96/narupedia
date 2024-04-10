import { Request, Response } from 'express';
import { methods } from '../services/methods.service';
import { MESSAGES } from '../../../libs/messages.libs';

export const deleteCharacter = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;

    const deleteResult = await methods.deleteCharacter(id);

    if (!deleteResult.exists) {
      res.status(404).json({
        res: deleteResult.exists,
        message: MESSAGES.database.NotExistRecord,
      });
    } else {
      res.json({
        res: true,
        message: MESSAGES.database.recordDeleted,
        info: deleteResult.result,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: MESSAGES.server.serverError });
  }
};
