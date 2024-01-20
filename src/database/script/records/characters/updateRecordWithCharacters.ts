/* import modules */
import { Characters } from '../../../../services/narutodb/characters/getCharactersTypes';
import { Character } from './recordDataTypes';

/* function updateRecordWithCharacters */
export const updateRecordWithCharacters = (
  data: Characters,
  record: Character[],
) => {
  data.characters.map((element) => {
    const character: Character = {};
    character.id = element.id;
    character.name = element.name;
    character.image = element.images;
    record.push(character);
  });
};
/* end function updateRecordWithCharacters */
