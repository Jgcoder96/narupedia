/* import modules */
import { Bijus } from '../../../../services/narutodb/bijus/getBijusTypes';
import { Character } from './recordDataTypes';
import { mapAndFindIndex } from './mapAndFindIndex';

/* function updateRecordWithBijus */
export const updateRecordWithBijus = (data: Bijus, record: Character[]) => {
  data.tailedBeasts.map((biju) => {
    mapAndFindIndex(record, biju.id, (search) => {
      if (!record[search].group) {
        record[search].group = ['biju'];
      } else {
        record[search].group?.push('biju');
      }
    });
  });
};
/* end function updateRecordWithBijus */
