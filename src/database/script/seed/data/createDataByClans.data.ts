import { methods } from '../../../../apis/methods.api';
import { Clan } from './createDataByClansTypes.data';

export const createDataByClans = async () => {
  const dataClans = await methods.getClansByNarutodb();
  const record: Clan[] = [];

  if (dataClans) {
    dataClans.clans.map((element) => {
      const clan: Clan = {};
      clan.id = element.id;
      clan.name = element.name;
      record.push(clan);
    });
  }
  return record;
};
