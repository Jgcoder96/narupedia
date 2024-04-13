import { MODELS } from '../models/models';
import { Response } from '../types/response.type';
import { MESSAGES } from '../../../libs/messages.libs';

export const readAllCharacterWithPage = async (
  offset: number,
  limit: number,
) => {
  const response: Response = { procced: false };
  const existCharacters = await MODELS.findAllCharacterWithPageAndLimit(
      offset,
      limit,
    ),
    countCharacters = await MODELS.countOfCharacter();
  if (existCharacters[0].length > 0 && countCharacters[0].length > 0) {
    response.procced = true;
    response.data = [existCharacters[0], countCharacters[0]];
  } else {
    response.message = MESSAGES.database.notFoundRecords;
  }
  return response;
};
