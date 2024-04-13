import { Request, Response } from 'express';
import { SERVICES } from '../services/services';
import { convertStringToJSON } from '../../../utils/convertStringToJSON';
import { MESSAGES } from '../../../libs/messages.libs';

export const getCharacter = async (req: Request, res: Response) => {
  try {
    const character_id = parseInt(req.params.id);
    const result = await SERVICES.readCharacter(character_id);

    if (result.procced && result.data) {
      convertStringToJSON(
        result.data[0],
        'villages',
        'clans',
        'kekkeigenkais',
        'images',
      );

      return res.status(200).json({
        res: result.procced,
        character: result.data[0][0],
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
