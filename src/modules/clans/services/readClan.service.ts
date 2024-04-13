import { MODELS } from '../models/models';
import { MESSAGES } from '../../../libs/messages.libs';
import { Response } from '../types/response.type';

export const readClan = async (id: number) => {
  const response: Response = { procced: false };
  const existClan = await MODELS.findClanById(id),
    existCharacters = await MODELS.findClanByLikeId(id);
  if (existClan[0].length > 0 && existCharacters[0].length > 0) {
    response.procced = true;
    response.data = [existClan[0], existCharacters[0]];
  } else {
    response.message = MESSAGES.database.notFoundRecords;
  }
  return response;
};
