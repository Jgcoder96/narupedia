import { MODELS } from '../models/models';
import { MESSAGES } from '../../../libs/messages.libs';
import { Response } from '../types/response.type';

export const deleteClan = async (id: number) => {
  const response: Response = { procced: false };
  const existClan = await MODELS.findClanById(id);
  if (existClan[0].length > 0) {
    response.procced = true;
    response.message = MESSAGES.database.recordDeleted;
    await MODELS.deleteClan(id);
  } else {
    response.message = MESSAGES.database.NotExistRecord;
  }
  return response;
};
