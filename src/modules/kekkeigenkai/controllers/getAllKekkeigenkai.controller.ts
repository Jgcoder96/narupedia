import { Request, Response } from 'express';
import { SERVICES } from '../services/services';
import { MESSAGES } from '../../../libs/messages.libs';

export const getAllKekkeigenkai = async (_req: Request, res: Response) => {
  try {
    const result = await SERVICES.readAllKekkeigenkai();

    if (result.procced && result.data) {
      return res.json({ res: result.procced, kekkeigenkais: result.data[0] });
    } else {
      return res.json({
        res: result.procced,
        message: result.message,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: MESSAGES.server.serverError });
  }
};
