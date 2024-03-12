/* import modules */
import { request } from '../../../../services/narutodb/request';
import { Village } from './recordDataTypes';
/*  */

/* function recordData */
export const recordDataVillages = async () => {
  const dataVillages = await request.getVillages();
  const record: Village[] = [];

  if (dataVillages) {
    dataVillages.villages.map((element) => {
      const village: Village = {};
      village.id = element.id;
      village.name = element.name;
      record.push(village);
    });
    const village: Village = {};
    village.id = record.length;
    village.name = 'unknown';
    record.push(village);
  }
  return record;
};
/*  */
