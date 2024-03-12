/* import modules */
import { recordDataCharacters } from '../records/characters/recordDataCharacters';
import { recordDataClans } from '../records/clans/recordDataClans';

/* function queryClanXCharacter */
export const queryClanXCharacter = async () => {
  const dataCharacters = await recordDataCharacters();
  const dataClans = await recordDataClans();
  let query =
    'INSERT INTO clan_x_character (cxc_id, clan_id, character_id) VALUES ';
  if (dataCharacters && dataClans) {
    dataCharacters.map((character) => {
      if (character.clan) {
        character.clan.map((element) => {
          const stringCharacter = `("0","${element.id}","${character.id}"),`;
          query = query + stringCharacter;
        });
      } else {
        const stringCharacter = `("0","${dataClans.length - 1}","${
          character.id
        }"),`;
        query = query + stringCharacter;
      }
    });
    query = query.slice(0, -1) + ';';
  }
  console.log('query to clan x character created successful');
  return query;
};
/*  */
