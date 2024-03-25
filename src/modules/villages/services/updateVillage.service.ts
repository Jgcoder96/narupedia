import { methods } from '../models/methods.model';

export const updateVillage = async (id: number, village: string) => {
  const existingVillage = await methods.findVillageById(id);
  if (existingVillage[0].length > 0) {
    const result = await methods.updateVillage(id, village);
    return { exists: true, result };
  } else {
    return { exists: false };
  }
};
