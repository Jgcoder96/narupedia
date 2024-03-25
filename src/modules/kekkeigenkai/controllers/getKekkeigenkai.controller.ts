/* import libreries */
import { Request, Response } from 'express';
/*  */
/* import modules */
import { methods } from '../services/methods.service';
import { convertStringToJSON } from '../utils/convertStringToJSON';
/*  */

/* function getVillage */
export const getKekkeigenkai = async (req: Request, res: Response) => {
  try {
    const kekkeigenkai_id = parseInt(req.params.id);
    const readResult = await methods.readKekkeigenkai(kekkeigenkai_id);
    if (readResult.exists) {
      if (readResult.resultVillage && readResult.resultCharacter) {
        convertStringToJSON(
          readResult.resultCharacter[0],
          'villages',
          'clans',
          'kekkeigenkais',
        );
        return res.json({
          kekkeigenkai_id: readResult.resultVillage[0][0]['kekkeigenkai_id'],
          name: readResult.resultVillage[0][0]['kekkeigenkai'],
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
/*  */
