import { methods } from '../models/methods.model';

export const createVillage = async (village: string) => {
  const maxIdVillage = await methods.findVillageByMaxId();
  const existingVillage = await methods.findVillageByName(village);
  if (existingVillage[0].length > 0) {
    return { exists: true, record: existingVillage[0] };
  } else {
    const id = maxIdVillage[0][0]['maxId'] + 1;
    const result = await methods.insertVillage(id, village);
    return { exists: false, result };
  }
};
