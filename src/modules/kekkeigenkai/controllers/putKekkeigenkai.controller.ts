import { Request, Response } from 'express';
import { SERVICES } from '../services/services';
import { MESSAGES } from '../../../libs/messages.libs';

export const putKekkeigenkai = async (req: Request, res: Response) => {
  try {
    const { id, kekkeigenkai } = req.body;

    const result = await SERVICES.updateKekkeigenkai(id, kekkeigenkai);

    if (result.procced) {
      return res.status(200).json({
        res: result.procced,
        message: result.message,
      });
    } else {
      return res.status(404).json({
        res: result.procced,
        message: result.message,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: MESSAGES.server.serverError });
  }
};
