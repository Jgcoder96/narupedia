import { MODELS } from '../models/models';
import { MESSAGES } from '../../../libs/messages.libs';
import { Response } from '../types/response.type';

export const deleteVillage = async (id: number) => {
  const existVillage = await MODELS.findVillageById(id);
  const response: Response = { procced: false };
  if (existVillage[0].length > 0) {
    response.procced = true;
    response.message = MESSAGES.database.recordDeleted;
    await MODELS.deleteVillage(id);
  } else {
    response.message = MESSAGES.database.NotExistRecord;
  }
  return response;
};
