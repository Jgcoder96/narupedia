import { methods } from '../models/methods.model';

export const createCharacter = async (character: string, image: string) => {
  const maxIdClan = await methods.findCharacterByMaxId();
  const existingClan = await methods.findCharacterByName(character);
  if (existingClan[0].length > 0) {
    return { exists: true, record: existingClan[0] };
  } else {
    const id = maxIdClan[0][0]['maxId'] + 1;
    const result = await methods.insertCharacter(id, character, image);
    return { exists: false, result };
  }
};
