import { Request, Response } from 'express';
import { methods } from '../services/methods.service';
import { convertStringToJSON } from '../../../utils/convertStringToJSON';

export const getCharacter = async (req: Request, res: Response) => {
  try {
    const character_id = parseInt(req.params.id);
    const readResult = await methods.readCharacter(character_id);

    if (readResult.exists && readResult.resultCharacter) {
      convertStringToJSON(
        readResult.resultCharacter[0],
        'villages',
        'clans',
        'kekkeigenkais',
        'images',
      );

      return res.json({
        character: readResult.resultCharacter[0][0],
      });
    } else {
      return res.json({
        message: 'not found records to data base',
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
