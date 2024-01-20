/* import modules */
import { request } from '../../../../services/narutodb/request';
import { Clan } from './recordDataTypes';

/* function recordData */
export const recordDataClans = async () => {
  const dataClans = await request.getClans();
  const record: Clan[] = [];

  if (dataClans) {
    dataClans.clans.map((element) => {
      const clan: Clan = {};
      clan.id = element.id;
      clan.name = element.name;
      record.push(clan);
    });
    const clan: Clan = {};
    clan.id = record.length;
    clan.name = "'unknown'";
    record.push(clan);
  }
  return record;
};
/* end function recordData */
