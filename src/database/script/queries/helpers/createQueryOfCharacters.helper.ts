import { methods } from '../../data/methods.data';

export const createQueryOfCharacters = async () => {
  const dataCharacters = await methods.createDataByCharacters();
  let query = 'INSERT INTO characters (character_id, name) VALUES ';
  let queryImage =
    'INSERT INTO image_x_character (ixc_id, image, character_id) VALUES ';
  if (dataCharacters) {
    dataCharacters.map((character) => {
      const stringCharacter = `("${character.id}","${character.name}"),`;
      query = query + stringCharacter;
      if (character.image) {
        character.image.map((picture) => {
          const stringImage = `("0","${picture}","${character.id}"),`;
          queryImage = queryImage + stringImage;
        });
      }
    });
    query = query.slice(0, -1) + ';';
    queryImage = queryImage.slice(0, -1) + ';';
  }
  console.log('query to characters created successful');
  return [query, queryImage];
};
