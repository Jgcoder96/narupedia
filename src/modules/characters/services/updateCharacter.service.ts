import { MODELS } from '../models/models';
import { Response } from '../types/response.type';
import { MESSAGES } from '../../../libs/messages.libs';

export const updateCharacter = async (id: number, character: string) => {
  const response: Response = { procced: false };
  const existCharacter = await MODELS.findCharacterById(id);
  if (existCharacter[0].length > 0) {
    await MODELS.updateCharacter(id, character);
    response.procced = true;
    response.message = MESSAGES.database.recordUpdate;
  } else {
    response.message = MESSAGES.database.NotExistRecord;
  }
  return response;
};
