/* import modules */
import { recordDataClans } from '../records/clans/recordDataClans';

/* function queryClans */
export const queryClans = async () => {
  const data = await recordDataClans();
  let query = 'INSERT INTO clans (clan_id, clan) VALUES ';
  if (data !== undefined) {
    data.map((clan) => {
      const stringClan = `("${clan.id}","${clan.name}"),`;
      query = query + stringClan;
      return query;
    });
    query = query.slice(0, -1) + ';';
  }
  console.log('query to clans created successful');
  return query;
};
/*  */
