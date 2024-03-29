/* import modules */

import { Bijus } from '../../../../apis/getBijusByNarutodbTypes.api';
import { Character } from '../createDataByCharactersTypes.data';
import { mapAndFindIndex } from '../../../../utils/mapAndFindIndex.util';
/*  */

/* function updateRecordWithBijus */
export const addBijusToCharactersData = (data: Bijus, record: Character[]) => {
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
/*  */
