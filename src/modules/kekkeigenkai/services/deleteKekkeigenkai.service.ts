import { MODELS } from '../models/models';
import { MESSAGES } from '../../../libs/messages.libs';
import { Response } from '../types/response.type';

export const deleteKekkeigenkai = async (id: number) => {
  const response: Response = { procced: false };
  const existKekkeigenkai = await MODELS.findKekkeigenkaiById(id);
  if (existKekkeigenkai[0].length > 0) {
    await MODELS.deleteKekkeigenkai(id);
    response.procced = true;
    response.message = MESSAGES.database.recordDeleted;
  } else {
    response.message = MESSAGES.database.NotExistRecord;
  }
  return response;
};
