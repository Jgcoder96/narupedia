import { Request, Response } from 'express';
import { SERVICES } from '../services/services';
import { MESSAGES } from '../../../libs/messages.libs';

export const putCharacter = async (req: Request, res: Response) => {
  try {
    const { id, character } = req.body;
    const result = await SERVICES.updateCharacter(id, character);

    if (result.procced) {
      res.status(200).json({
        res: result.procced,
        message: result.message,
      });
    } else {
      res.status(404).json({
        res: result.procced,
        message: result.message,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: MESSAGES.server.serverError });
  }
};
