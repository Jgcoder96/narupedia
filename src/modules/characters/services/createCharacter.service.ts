import { MODELS } from '../models/models';
import { MESSAGES } from '../../../libs/messages.libs';
import { Response } from '../types/response.type';

export const createCharacter = async (character: string) => {
  const response: Response = { procced: false };
  const maxIdClan = await MODELS.findCharacterByMaxId(),
    existClan = await MODELS.findCharacterByName(character);
  if (existClan[0].length > 0) {
    response.message = MESSAGES.database.Existsrecord;
  } else {
    const id = maxIdClan[0][0].maxId + 1;
    await MODELS.insertCharacter(id, character);
    response.procced = true;
    response.message = MESSAGES.database.recordCreated;
  }
  return response;
};
