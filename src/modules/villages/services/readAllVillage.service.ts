import { methods } from '../models/methods.model';

export const readAllVillage = async () => {
  const existingVillage = await methods.findAllVillage();
  if (existingVillage[0].length > 0) {
    return { exists: true, result: existingVillage[0] };
  } else {
    return { exists: false };
  }
};
