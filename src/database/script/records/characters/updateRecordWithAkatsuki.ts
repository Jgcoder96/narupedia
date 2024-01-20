/* import modules */
import { Akatsukis } from '../../../../services/narutodb/akatsuki/getAkatsukiTypes';
import { Character } from './recordDataTypes';
import { mapAndFindIndex } from './mapAndFindIndex';

/* function updateRecordWithAkatsuki */
export const updateRecordWithAkatsuki = (
  data: Akatsukis,
  record: Character[],
) => {
  data.akatsuki.map((akatsuki) => {
    mapAndFindIndex(record, akatsuki.id, (search) => {
      if (!record[search].group) {
        record[search].group = ['akatsuki'];
      } else {
        record[search].group?.push('akatsuki');
      }
    });
  });
};
/* end function updateRecordWithAkatsuki */
