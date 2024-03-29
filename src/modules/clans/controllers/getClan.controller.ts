/* import libreries */
import { Request, Response } from 'express';
/*  */
/* import modules */
import { methods } from '../services/methods.service';
import { convertStringToJSON } from '../../../utils/convertStringToJSON';
/*  */

/* function getClan */
export const getClan = async (req: Request, res: Response) => {
  try {
    const clan_id = parseInt(req.params.id);
    const readResult = await methods.readClan(clan_id);
    if (readResult.exists) {
      if (readResult.resultClan && readResult.resultCharacter) {
        convertStringToJSON(
          readResult.resultCharacter[0],
          'villages',
          'clans',
          'kekkeigenkais',
        );
        return res.json({
          clan_id: readResult.resultClan[0][0]['clan_id'],
          name: readResult.resultClan[0][0]['kekkeigenkai'],
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
