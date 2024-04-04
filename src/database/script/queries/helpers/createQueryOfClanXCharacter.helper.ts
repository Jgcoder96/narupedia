import { methods } from '../../data/methods.data';

export const createQueryOfClanXCharacter = async () => {
  const dataCharacters = await methods.createDataByCharacters();
  const dataClans = await methods.createDataByClans();
  let query =
    'INSERT INTO clan_x_character (cxc_id, clan_id, character_id) VALUES ';
  if (dataCharacters && dataClans) {
    dataCharacters.map((character) => {
      if (character.clan) {
        character.clan.map((element) => {
          const stringCharacter = `("0","${element.id}","${character.id}"),`;
          query = query + stringCharacter;
        });
      }
    });
    query = query.slice(0, -1) + ';';
  }
  console.log('query to clan x character created successful');
  return query;
};
