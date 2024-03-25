import { findVillageById } from '../models/findVillageById.model';
import { findVillageByLikeId } from '../models/findVillageByLikeId.models';

export const readVillage = async (id: number) => {
  const existingVillage = await findVillageById(id),
    existingCharacter = await findVillageByLikeId(id);
  if (existingVillage[0].length > 0 && existingCharacter[0].length > 0) {
    return {
      exists: true,
      resultVillage: existingVillage,
      resultCharacter: existingCharacter,
    };
  } else {
    return { exists: false };
  }
  /* if (existingVillage && existingCharacter) {
  } */
};
