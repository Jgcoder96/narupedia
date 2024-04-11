import { Request, Response } from 'express';
import { SERVICES } from '../services/services';
import { MESSAGES } from '../../../libs/messages.libs';

export const postVillage = async (req: Request, res: Response) => {
  try {
    const { village } = req.body;
    const result = await SERVICES.createVillage(village);
    if (result.procced) {
      res.status(201).json({
        res: result.procced,
        message: result.message,
      });
    } else {
      res.status(409).json({
        res: result.procced,
        message: result.message,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: MESSAGES.server.serverError });
  }
};
