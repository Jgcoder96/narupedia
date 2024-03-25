import { methods } from '../models/methods.model';

export const readVillage = async (id: number) => {
  const existingVillage = await methods.findVillageById(id),
    existingCharacter = await methods.findVillageByLikeId(id);
  if (existingVillage[0].length > 0 && existingCharacter[0].length > 0) {
    return {
      exists: true,
      resultVillage: existingVillage,
      resultCharacter: existingCharacter,
    };
  } else {
    return { exists: false };
  }
};
