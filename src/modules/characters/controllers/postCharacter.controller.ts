/* import libreries */
import { Request, Response } from 'express';
/*  */
/* import modules */
import { methods } from '../services/methods.service';
/*  */

export const postCharacter = async (req: Request, res: Response) => {
  try {
    const { character, image } = req.body;
    const creationResult = await methods.createCharacter(character, image);
    if (creationResult.exists) {
      res.json({
        res: false,
        message: `character: ${character} exists in the database`,
        record: creationResult.record,
      });
    } else {
      res.json({
        res: true,
        message: `character: ${character} was inserted correctly`,
        info: creationResult.result,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
