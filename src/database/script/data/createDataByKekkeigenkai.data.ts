import { methods } from '../../../apis/methods.api';
import { Kekkeigenkai } from './createDataByKekkeigenkaiTypes.data';

export const createDataByKekkeigenkai = async () => {
  const dataKekkeigenkai = await methods.getKekkeigenkaiByNarutodb();
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
