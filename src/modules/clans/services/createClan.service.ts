import { MODELS } from '../models/models';
import { Response } from '../types/response.type';
import { MESSAGES } from '../../../libs/messages.libs';

export const createClan = async (clan: string) => {
  const response: Response = { procced: false };
  const maxIdClan = await MODELS.findClanByMaxId();
  const existClan = await MODELS.findClanByName(clan);
  if (existClan[0].length > 0) {
    response.message = MESSAGES.database.Existsrecord;
  } else {
    const maxId = maxIdClan[0][0].maxId + 1;
    await MODELS.insertClan(maxId, clan);
    response.procced = true;
    response.message = MESSAGES.database.recordCreated;
  }
  return response;
};
