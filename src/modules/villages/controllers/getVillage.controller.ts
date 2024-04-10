import { Request, Response } from 'express';
import { SERVICES } from '../services/services';
import { convertStringToJSON } from '../../../utils/convertStringToJSON';
import { MESSAGES } from '../../../libs/messages.libs';

export const getVillage = async (req: Request, res: Response) => {
  try {
    const villaje_id = parseInt(req.params.id);
    const result = await SERVICES.readVillage(villaje_id);
    if (result.procced && result.data) {
      convertStringToJSON(
        result.data[1],
        'villages',
        'clans',
        'kekkeigenkais',
        'images',
      );
      return res.status(200).json({
        res: result.procced,
        id: result.data[0][0].village_id,
        name: result.data[0][0].village,
        characters: result.data[1],
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
