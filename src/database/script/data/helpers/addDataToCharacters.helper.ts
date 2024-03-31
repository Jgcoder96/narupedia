import { Characters } from '../../../../apis/getCharactersByNarutodbTypes.api';
import { Character } from '../createDataByCharactersTypes.data';

export const addDataToCharacters = (data: Characters, record: Character[]) => {
  data.characters.map((element) => {
    const character: Character = {};
    character.id = element.id;
    character.name = element.name;
    character.image = element.images;
    record.push(character);
  });
};
