import { methods } from '../models/methods.model';

export const readClan = async (id: number) => {
  const existingClan = await methods.findClanById(id),
    existingCharacter = await methods.findClanByLikeId(id);
  if (existingClan[0].length > 0 && existingCharacter[0].length > 0) {
    return {
      exists: true,
      resultClan: existingClan,
      resultCharacter: existingCharacter,
    };
  } else {
    return { exists: false };
  }
};
