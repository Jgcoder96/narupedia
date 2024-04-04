import { Request, Response } from 'express';
import { methods } from '../services/methods.service';
import { convertStringToJSON } from '../../../utils/convertStringToJSON';

export const getVillage = async (req: Request, res: Response) => {
  try {
    const villaje_id = parseInt(req.params.id);
    const readResult = await methods.readVillage(villaje_id);
    if (readResult.exists) {
      if (readResult.resultVillage && readResult.resultCharacter) {
        convertStringToJSON(
          readResult.resultCharacter[0],
          'villages',
          'clans',
          'kekkeigenkais',
          'images',
        );
        return res.json({
          village_id: readResult.resultVillage[0][0]['village_id'],
          name: readResult.resultVillage[0][0]['village'],
          characters: readResult.resultCharacter[0],
        });
      }
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
