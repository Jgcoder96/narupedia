import { methods } from '../models/methods.model';

export const deleteCharacter = async (id: number) => {
  const existingCharacter = await methods.findCharacterById(id);
  if (existingCharacter[0].length > 0) {
    const result = await methods.deleteCharacter(id);
    return { exists: true, result };
  } else {
    return { exists: false };
  }
};
