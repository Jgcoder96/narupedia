import { MODELS } from '../models/models';
import { MESSAGES } from '../../../libs/messages.libs';
import { Response } from '../types/response.type';

export const readAllCharacter = async () => {
  const response: Response = { procced: false };
  const existCharacters = await MODELS.findAllCharacter(),
    countCharacters = await MODELS.countOfCharacter();
  if (existCharacters[0].length > 0 && countCharacters[0].length > 0) {
    response.procced = true;
    response.data = [existCharacters[0], countCharacters[0]];
  } else {
    response.message = MESSAGES.database.notFoundRecords;
  }
  return response;
};
