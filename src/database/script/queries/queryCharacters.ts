/* import modules */
import { recordDataCharacters } from '../records/characters/recordDataCharacters';

/* function queryCharacters */
export const queryCharacters = async () => {
  const dataCharacters = await recordDataCharacters();
  let query = 'INSERT INTO characters (character_id, name, image) VALUES ';
  if (dataCharacters) {
    dataCharacters.map((character) => {
      const stringCharacter = `("${character.id}","${character.name}","${
        character.image && character.image.length !== 0
          ? character.image[0]
          : 'no picture'
      }"),`;
      query = query + stringCharacter;
    });
    query = query.slice(0, -1) + ';';
  }
  console.log('query to characters created successful');
  return query;
};
/*  */
