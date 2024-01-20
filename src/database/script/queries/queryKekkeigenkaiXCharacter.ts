import { recordDataCharacters } from '../records/characters/recordDataCharacters';
import { recordDataKekkeigenkai } from '../records/kekkeigenkai/recordDataKekkeigenkai';

export const queryKekkeigenkaiXCharacter = async () => {
  const dataCharacters = await recordDataCharacters();
  const dataKekkeigenkai = await recordDataKekkeigenkai();
  let query =
    'INSERT INTO kekkeigenkai_x_character (kxc_id, kekkeigenkai_id, character_id) VALUES ';
  if (dataCharacters && dataKekkeigenkai) {
    dataCharacters.map((character) => {
      if (character.kekkeigenkai) {
        character.kekkeigenkai.map((element) => {
          const stringCharacter = `("0","${element.id}","${character.id}"),`;
          query = query + stringCharacter;
        });
      } else {
        const stringCharacter = `("0","${dataKekkeigenkai.length - 1}","${
          character.id
        }"),`;
        query = query + stringCharacter;
      }
    });
    query = query.slice(0, -1) + ';';
  }
  return query;
};
queryKekkeigenkaiXCharacter();
