/* import modules */
import { methods } from '../../data/methods.data';

/* function queryKekkeigenkaiXCharacter */
export const createQueryOfKekkeigenkaiXCharacters = async () => {
  const dataCharacters = await methods.createDataByCharacters();
  const dataKekkeigenkai = await methods.createDataByKekkeigenkai();
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
  console.log('query to kekkeigenkai x character created successful');
  return query;
};
/*  */
