import { methods } from '../models/methods.model';

export const updateCharacter = async (
  id: number,
  character: string,
  image: string,
) => {
  const existingCharacter = await methods.findCharacterById(id);
  if (existingCharacter[0].length > 0) {
    const result = await methods.updateCharacter(id, character, image);
    return { exists: true, result };
  } else {
    return { exists: false };
  }
};
