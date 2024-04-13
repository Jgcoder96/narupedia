import { MODELS } from '../models/models';
import { MESSAGES } from '../../../libs/messages.libs';
import { Response } from '../types/response.type';

export const deleteCharacter = async (id: number) => {
  const response: Response = { procced: false };
  const existCharacter = await MODELS.findCharacterById(id);
  if (existCharacter[0].length > 0) {
    MODELS.deleteCharacter(id);
    response.procced = true;
    response.message = MESSAGES.database.recordDeleted;
  } else {
    response.message = MESSAGES.database.NotExistRecord;
  }
  return response;
};
