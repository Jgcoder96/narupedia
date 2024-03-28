/* import modules */
import { methods } from '../../../apis/methods.api';
import { Village } from './createDataByVillagesTypes.data';
/*  */

/* function recordData */
export const createDataByVillages = async () => {
  const dataVillages = await methods.getVillagesByNarutodb();
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
