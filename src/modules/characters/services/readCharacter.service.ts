import { methods } from '../models/methods.model';

export const readCharacter = async (id: number) => {
  const existingCharacter = await methods.findCharacterById(id);
  if (existingCharacter[0].length > 0) {
    return {
      exists: true,
      resultCharacter: existingCharacter,
    };
  } else {
    return { exists: false };
  }
};
