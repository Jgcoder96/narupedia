import { methods } from '../models/methods.model';

export const deleteKekkeigenkai = async (id: number) => {
  const existingKekkeigenkai = await methods.findKekkeigenkaiById(id);
  if (existingKekkeigenkai[0].length > 0) {
    const result = await methods.deleteKekkeigenkai(id);
    return { exists: true, result };
  } else {
    return { exists: false };
  }
};
