import { Request, Response } from 'express';
import { methods } from '../services/methods.service';
import { convertStringToJSON } from '../../../utils/convertStringToJSON';

export const getKekkeigenkai = async (req: Request, res: Response) => {
  try {
    const kekkeigenkai_id = parseInt(req.params.id);
    const readResult = await methods.readKekkeigenkai(kekkeigenkai_id);

    if (
      readResult.exists &&
      readResult.resultKekkeigenkai &&
      readResult.resultCharacter
    ) {
      convertStringToJSON(
        readResult.resultCharacter[0],
        'villages',
        'clans',
        'kekkeigenkais',
        'images',
      );
      return res.json({
        kekkeigenkai_id: readResult.resultKekkeigenkai[0][0]['kekkeigenkai_id'],
        name: readResult.resultKekkeigenkai[0][0]['kekkeigenkai'],
        characters: readResult.resultCharacter[0],
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
/*  */
