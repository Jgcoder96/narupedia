import { methods } from '../models/methods.model';

export const readAllCharacter = async () => {
  const existingCharacters = await methods.findAllCharacter();
  const countCharacters = await methods.countOfCharacter();
  if (existingCharacters[0].length > 0 && countCharacters[0].length > 0) {
    return {
      exists: true,
      countCharacter: countCharacters,
      resultCharacter: existingCharacters,
    };
  } else {
    return { exists: false };
  }
};
