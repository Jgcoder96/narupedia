import { getClans } from '../../services/narutodb/clans/getClans';

export const addClans = async () => {
  const data = await getClans();
  let query = 'INSERT INTO clans (id, name) VALUES ';
  if (data !== undefined) {
    data.clans.map((clan) => {
      const clanName = clan.name;
      const clanId = clan.id;
      const stringClan = `("${clanId}","${clanName}"),`;
      query = query + stringClan;
      return query;
    });
    query = query.slice(0, -1) + ';';
  }
  console.log(query);
};

addClans();
