import { methods } from '../models/methods.model';

export const readAllKekkeigenkai = async () => {
  const existingkekkeigenkai = await methods.findAllKekkeigenkai();
  if (existingkekkeigenkai[0].length > 0) {
    return { exists: true, result: existingkekkeigenkai[0] };
  } else {
    return { exists: false };
  }
};
