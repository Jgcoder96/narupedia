import { MESSAGES } from '../../../libs/messages.libs';
import { MODELS } from '../models/models';
import { Response } from '../types/response.type';

export const updateKekkeigenkai = async (id: number, kekkeigenkai: string) => {
  const response: Response = { procced: false };
  const existKekkeigenkai = await MODELS.findKekkeigenkaiById(id);
  if (existKekkeigenkai[0].length > 0) {
    response.procced = true;
    response.message = MESSAGES.database.recordUpdate;
    await MODELS.updateKekkeigenkai(id, kekkeigenkai);
  } else {
    response.message = MESSAGES.database.NotExistRecord;
  }
  return response;
};
