import { MODELS } from '../models/models';
import { MESSAGES } from '../../../libs/messages.libs';
import { Response } from '../types/response.type';

export const readAllVillage = async () => {
  const dataVillages = await MODELS.findAllVillage();
  const response: Response = { procced: false };
  if (dataVillages[0].length > 0) {
    response.procced = true;
    response.data = [dataVillages[0]];
  } else {
    response.message = MESSAGES.database.notFoundRecords;
  }
  return response;
};
