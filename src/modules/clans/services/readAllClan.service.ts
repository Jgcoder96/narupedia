import { MODELS } from '../models/models';
import { Response } from '../types/response.type';
import { MESSAGES } from '../../../libs/messages.libs';

export const readAllClan = async () => {
  const response: Response = { procced: false };
  const existClan = await MODELS.findAllClan();
  if (existClan[0].length > 0) {
    response.procced = true;
    response.data = [existClan[0]];
  } else {
    response.message = MESSAGES.database.notFoundRecords;
  }
  return response;
};
