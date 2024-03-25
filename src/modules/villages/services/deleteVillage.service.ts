import { methods } from '../models/methods.model';

export const deleteVillage = async (id: number) => {
  const existingVillage = await methods.findVillageById(id);
  if (existingVillage[0].length > 0) {
    const result = await methods.deleteVillage(id);
    return { exists: true, result };
  } else {
    return { exists: false };
  }
};
