import { methods } from '../models/methods.model';

export const deleteClan = async (id: number) => {
  const existingClan = await methods.findClanById(id);
  if (existingClan[0].length > 0) {
    const result = await methods.deleteClan(id);
    return { exists: true, result };
  } else {
    return { exists: false };
  }
};
