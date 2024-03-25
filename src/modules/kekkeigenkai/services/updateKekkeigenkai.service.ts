import { methods } from '../models/methods.model';

export const updateKekkeigenkai = async (id: number, kekkeigenkai: string) => {
  const existingKekkeigenkai = await methods.findKekkeigenkaiById(id);
  if (existingKekkeigenkai[0].length > 0) {
    const result = await methods.updateKekkeigenkai(id, kekkeigenkai);
    return { exists: true, result };
  } else {
    return { exists: false };
  }
};
