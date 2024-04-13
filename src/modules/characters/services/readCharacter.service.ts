import { MODELS } from '../models/models';
import { Response } from '../types/response.type';
import { MESSAGES } from '../../../libs/messages.libs';

export const readCharacter = async (id: number) => {
  const response: Response = { procced: false };
  const existCharacter = await MODELS.findCharacterById(id);
  if (existCharacter[0].length > 0) {
    response.procced = true;
    response.data = [existCharacter[0]];
  } else {
    response.message = MESSAGES.database.notFoundRecords;
  }
  return response;
};
