import { methods } from '../models/methods.model';

export const updateClan = async (id: number, clan: string) => {
  const existingClan = await methods.findClanById(id);
  if (existingClan[0].length > 0) {
    const result = await methods.updateClan(id, clan);
    return { exists: true, result };
  } else {
    return { exists: false };
  }
};
