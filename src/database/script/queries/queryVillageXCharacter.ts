/* import modules */
import { recordDataCharacters } from '../records/characters/recordDataCharacters';
import { recordDataVillages } from '../records/villages/recordDataVillages';

/* function queryVillageXCharacter */
export const queryVillageXCharacter = async () => {
  const dataCharacters = await recordDataCharacters();
  const dataVillages = await recordDataVillages();
  let query =
    'INSERT INTO village_x_character (vxc_id, village_id, character_id) VALUES ';
  if (dataCharacters && dataVillages) {
    dataCharacters.map((character) => {
      if (character.village) {
        character.village.map((element) => {
          const stringCharacter = `("0","${element.id}","${character.id}"),`;
          query = query + stringCharacter;
        });
      } else {
        const stringCharacter = `("0","${dataVillages.length - 1}","${
          character.id
        }"),`;
        query = query + stringCharacter;
      }
    });
    query = query.slice(0, -1) + ';';
  }
  console.log('village x character created successful');
  return query;
};
/*  */
