import { MODELS } from '../models/models';
import { Response } from '../types/response.type';
import { MESSAGES } from '../../../libs/messages.libs';

export const updateClan = async (id: number, clan: string) => {
  const response: Response = { procced: false };
  const existClan = await MODELS.findClanById(id);
  if (existClan[0].length > 0) {
    await MODELS.updateClan(id, clan);
    response.procced = true;
    response.message = MESSAGES.database.recordUpdate;
  } else {
    response.message = MESSAGES.database.NotExistRecord;
  }
  return response;
};
