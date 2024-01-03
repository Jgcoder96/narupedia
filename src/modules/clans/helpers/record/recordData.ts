/* import modules */
import { request } from '../../../../services/narutodb/request';
import { Clan } from './recordDataTypes';

/* function recordData */
export const recordData = async () => {
  const dataClans = await request.getClans();
  const record: Clan[] = [];

  if (dataClans) {
    dataClans.clans.map((element) => {
      const clan: Clan = {};
      clan.id = element.id;
      clan.name = element.name;
      record.push(clan);
    });
  }
  console.log(record);
};
/* end function recordData */

recordData();
