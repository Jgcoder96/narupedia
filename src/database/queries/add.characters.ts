import { getCharacters } from '../../services/narutodb/characters/getCharacters';

export const addCharacters = async () => {
  const data = await getCharacters();
  let query = 'INSERT INTO characters (id, name) VALUES ';
  const recordCharacters: object[] = [];
  if (data !== undefined) {
    data.characters.map((obj) => {
      const character = {
        id: obj.id,
        name: obj.name,
        image: obj.images,
        
      };
      if (obj.personal !== undefined) {
        character.personal:
      }
      recordCharacters.push(character);
      const characterId = obj.id;
      const characterName = obj.name;
      const stringCharacter = `("${characterId}","${characterName}"),`;
      query = query + stringCharacter;
      return recordCharacters;
    });
    query = query.slice(0, -1) + ';';
  }
  console.log(recordCharacters);
};

addCharacters();
