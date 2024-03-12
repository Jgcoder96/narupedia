/* import modules */
import { Kekkeigenkai } from '../../../../services/narutodb/kekkeigenkai/getKekkeigenkaiTypes';
import { Character } from './recordDataTypes';
import { mapAndFindIndex } from './mapAndFindIndex';
/*  */

/* function updateRecordWithKekkeigenkai */
export const updateRecordWithKekkeigenkai = (
  data: Kekkeigenkai,
  record: Character[],
) => {
  data.kekkeigenkai.map((kekkeigenkai) => {
    kekkeigenkai.characters.map((element) => {
      mapAndFindIndex(record, element.id, (search) => {
        if (!record[search].kekkeigenkai) {
          const arrayObject: { id?: number; name?: string }[] = [];
          const info: { id?: number; name?: string } = {};
          info.id = kekkeigenkai.id;
          info.name = kekkeigenkai.name;
          arrayObject.push(info);
          record[search].kekkeigenkai = arrayObject;
        } else {
          const info: { id?: number; name?: string } = {};
          info.id = kekkeigenkai.id;
          info.name = kekkeigenkai.name;
          record[search].kekkeigenkai?.push(info);
        }
      });
    });
  });
};
/*  */
