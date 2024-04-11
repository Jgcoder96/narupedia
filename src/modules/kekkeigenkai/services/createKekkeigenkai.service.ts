import { MODELS } from '../models/models';
import { MESSAGES } from '../../../libs/messages.libs';
import { Response } from '../types/response.type';

export const createKekkeigenkai = async (kekkeigenkai: string) => {
  const response: Response = { procced: false };
  const maxIdKekkeigenkai = await MODELS.findKekkeigenkaiByMaxId(),
    existKekkeigenkai = await MODELS.findKekkeigenkaiByName(kekkeigenkai);
  if (existKekkeigenkai[0].length > 0) {
    response.message = MESSAGES.database.Existsrecord;
  } else {
    const maxId = maxIdKekkeigenkai[0][0].maxId + 1;
    await MODELS.insertKekkeigenkai(maxId, kekkeigenkai);
    response.procced = true;
    response.message = MESSAGES.database.recordCreated;
  }
  return response;
};
