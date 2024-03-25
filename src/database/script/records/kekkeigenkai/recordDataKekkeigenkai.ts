/* import modules */
import { request } from '../../../../services/request';
import { Kekkeigenkai } from './recordDataTypes';
/*  */

/* function recordData */
export const recordDataKekkeigenkai = async () => {
  const dataKekkeigenkai = await request.getKekkeigenkai();
  const record: Kekkeigenkai[] = [];

  if (dataKekkeigenkai) {
    dataKekkeigenkai.kekkeigenkai.map((element) => {
      const kekkeigenkai: Kekkeigenkai = {};
      kekkeigenkai.id = element.id;
      kekkeigenkai.name = element.name;
      record.push(kekkeigenkai);
    });
    const kekkeigenkai: Kekkeigenkai = {};
    kekkeigenkai.id = record.length;
    kekkeigenkai.name = 'unknown';
    record.push(kekkeigenkai);
  }
  return record;
};
/*  */
