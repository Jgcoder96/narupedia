import { MODELS } from '../models/models';
import { MESSAGES } from '../../../libs/messages.libs';
import { Response } from '../types/response.type';

export const updateVillage = async (id: number, village: string) => {
  const existVillage = await MODELS.findVillageById(id);
  const response: Response = { procced: false };
  if (existVillage[0].length > 0) {
    await MODELS.updateVillage(id, village);
    response.procced = true;
    response.message = MESSAGES.database.recordUpdate;
  } else {
    response.message = MESSAGES.database.NotExistRecord;
  }
  return response;
};
