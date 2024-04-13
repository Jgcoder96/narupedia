import { MODELS } from '../models/models';
import { Response } from '../types/response.type';
import { MESSAGES } from '../../../libs/messages.libs';

export const createVillage = async (village: string) => {
  const existVillage = await MODELS.findVillageByName(village),
    maxIdVillage = await MODELS.findVillageByMaxId();
  const response: Response = { procced: false };

  if (existVillage[0].length > 0) {
    response.procced = false;
    response.message = MESSAGES.database.Existsrecord;
  } else {
    const id = maxIdVillage[0][0].maxId + 1;
    await MODELS.insertVillage(id, village);
    response.procced = true;
    response.message = MESSAGES.database.recordCreated;
  }
  return response;
};
