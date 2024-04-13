import { Request, Response } from 'express';
import { SERVICES } from '../services/services';
import { convertStringToJSON } from '../../../utils/convertStringToJSON';
import { MESSAGES } from '../../../libs/messages.libs';

export const getAllCharacter = async (req: Request, res: Response) => {
  const queryPage = req.query.page,
    queryLimit = req.query.limit;
  try {
    if (queryPage && queryLimit) {
      const page = parseInt(JSON.stringify(queryPage).slice(1, -1)),
        limit = parseInt(JSON.stringify(queryLimit).slice(1, -1)),
        offset = (page - 1) * limit;

      const result = await SERVICES.readAllCharacterWithPage(offset, limit);

      if (result.procced && result.data) {
        const pages = Math.ceil(result.data[1][0].pages / limit);
        convertStringToJSON(
          result.data[0],
          'villages',
          'clans',
          'kekkeigenkais',
          'images',
        );
        return res.status(200).json({
          totalCharacter: result.data[1][0].pages,
          totalPages: pages,
          page,
          characters: result.data[0],
        });
      } else {
        res.status(404).json({
          res: result.procced,
          message: result.message,
        });
      }
    } else {
      const result = await SERVICES.readAllCharacter();
      if (result.procced && result.data) {
        convertStringToJSON(
          result.data[0],
          'villages',
          'clans',
          'kekkeigenkais',
          'images',
        );
        return res.status(200).json({
          totalCharacter: result.data[1][0].pages,
          characters: result.data[0],
        });
      } else {
        res.status(404).json({
          res: result.procced,
          message: result.message,
        });
      }
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: MESSAGES.server.serverError });
  }
};
