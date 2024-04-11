import { MODELS } from '../models/models';
import { Response } from '../types/response.type';
import { MESSAGES } from '../../../libs/messages.libs';

export const readAllKekkeigenkai = async () => {
  const response: Response = { procced: false };
  const existKekkeigenkai = await MODELS.findAllKekkeigenkai();
  if (existKekkeigenkai[0].length > 0) {
    response.procced = true;
    response.data = [existKekkeigenkai[0]];
  } else {
    response.message = MESSAGES.database.NotExistRecord;
  }
  return response;
};
