import { methods } from '../models/methods.model';

export const readKekkeigenkai = async (id: number) => {
  const existingKekkeigenkai = await methods.findKekkeigenkaiById(id),
    existingCharacter = await methods.findKekkeigenkaiByLikeId(id);
  if (existingKekkeigenkai[0].length > 0 && existingCharacter[0].length > 0) {
    return {
      exists: true,
      resultVillage: existingKekkeigenkai,
      resultCharacter: existingCharacter,
    };
  } else {
    return { exists: false };
  }
};
