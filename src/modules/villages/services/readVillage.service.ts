import { MODELS } from '../models/models';
import { MESSAGES } from '../../../libs/messages.libs';
import { Response } from '../types/response.type';

export const readVillage = async (id: number) => {
  const dataVillage = await MODELS.findVillageById(id),
    dataCharacters = await MODELS.findVillageByLikeId(id);
  const response: Response = { procced: false };
  if (dataVillage[0].length > 0 && dataCharacters[0].length > 0) {
    response.procced = true;
    response.data = [dataVillage[0], dataCharacters[0]];
  } else {
    response.procced = false;
    response.message = MESSAGES.database.notFoundRecords;
  }
  return response;
};
