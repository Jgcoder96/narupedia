import { Request, Response } from 'express';
import { SERVICES } from '../services/services';
import { MESSAGES } from '../../../libs/messages.libs';

export const getAllClan = async (_req: Request, res: Response) => {
  try {
    const result = await SERVICES.readAllClan();
    if (result.procced && result.data) {
      return res
        .status(200)
        .json({ res: result.procced, clans: result.data[0] });
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
