import { Request, Response } from 'express';
import { SERVICES } from '../services/services';
import { convertStringToJSON } from '../../../utils/convertStringToJSON';
import { MESSAGES } from '../../../libs/messages.libs';

export const getClan = async (req: Request, res: Response) => {
  try {
    const clan_id = parseInt(req.params.id);
    const result = await SERVICES.readClan(clan_id);

    if (result.procced && result.data) {
      convertStringToJSON(
        result.data[1],
        'villages',
        'clans',
        'kekkeigenkais',
        'images',
      );
      res.status(200).json({
        res: result.procced,
        id: result.data[0][0].clan_id,
        name: result.data[0][0].clan,
        characters: result.data[1],
      });
    } else {
      res.status(404).json({ res: result.procced, message: result.message });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: MESSAGES.server.serverError });
  }
};
/*  */
