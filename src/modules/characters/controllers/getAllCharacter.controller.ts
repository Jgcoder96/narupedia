import { Request, Response } from 'express';
import { methods } from '../services/methods.service';
import { convertStringToJSON } from '../../../utils/convertStringToJSON';

export const getAllCharacter = async (req: Request, res: Response) => {
  const queryPage = req.query.page,
    queryLimit = req.query.limit;

  try {
    if (queryPage && queryLimit) {
      const page = parseInt(JSON.stringify(queryPage).slice(1, -1)),
        limit = parseInt(JSON.stringify(queryLimit).slice(1, -1)),
        offset = (page - 1) * limit;

      const readResult = await methods.readAllCharacterWithPage(offset, limit);

      if (
        readResult.exists &&
        readResult.countCharacter &&
        readResult.resultCharacter
      ) {
        const pages = Math.ceil(
          readResult.countCharacter[0][0]['pages'] / limit,
        );

        convertStringToJSON(
          readResult.resultCharacter[0],
          'villages',
          'clans',
          'kekkeigenkais',
          'images',
        );

        return res.json({
          characters: readResult.resultCharacter[0],
          TotalCharacter: readResult.countCharacter[0][0],
          pages,
          page,
        });
      }
    } else {
      const readResult = await methods.readAllCharacter();

      if (
        readResult.exists &&
        readResult.countCharacter &&
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
          characters: readResult.resultCharacter[0],
          TotalCharacter: readResult.countCharacter[0][0],
        });
      }
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};
