import { MODELS } from '../models/models';
import { MESSAGES } from '../../../libs/messages.libs';
import { Response } from '../types/response.type';

export const readKekkeigenkai = async (id: number) => {
  const response: Response = { procced: false };
  const existKekkeigenkai = await MODELS.findKekkeigenkaiById(id),
    existCharacters = await MODELS.findKekkeigenkaiByLikeId(id);
  if (existKekkeigenkai[0].length > 0 && existCharacters[0].length > 0) {
    response.procced = true;
    response.data = [existKekkeigenkai[0], existCharacters[0]];
  } else {
    response.message = MESSAGES.database.NotExistRecord;
  }
  return response;
};
