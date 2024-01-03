/* import modules */
import { Bijus } from '../../../../services/narutodb/bijus/getBijusTypes';
import { Character } from './recordDataTypes';
import { mapAndFindIndex } from './mapAndFindIndex';

/* function updateRecordWithBijus */
export const updateRecordWithBijus = (data: Bijus, record: Character[]) => {
  data.tailedBeasts.map((biju) => {
    mapAndFindIndex(record, biju.id, (search) => {
      if (record[search].group !== undefined) {
        record[search].group?.push('biju');
      } else {
        record[search].group = ['biju'];
      }
      record[search].jinchuriki = biju.personal.jinchūriki;
    });
  });
};
/* end function updateRecordWithBijus */
