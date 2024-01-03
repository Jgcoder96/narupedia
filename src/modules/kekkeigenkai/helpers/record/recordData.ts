/* import modules */
import { request } from '../../../../services/narutodb/request';
import { Kekkeigenkai } from './recordDataTypes';

/* function recordData */
export const recordData = async () => {
  const dataKekkeigenkai = await request.getKekkeigenkai();
  const record: Kekkeigenkai[] = [];

  if (dataKekkeigenkai) {
    dataKekkeigenkai.kekkeigenkai.map((element) => {
      const kekkeigenkai: Kekkeigenkai = {};
      kekkeigenkai.id = element.id;
      kekkeigenkai.name = element.name;
      record.push(kekkeigenkai);
    });
  }
  console.log(record);
};
/* end function recordData */

recordData();
