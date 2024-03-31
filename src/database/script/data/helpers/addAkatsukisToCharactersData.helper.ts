import { Akatsukis } from '../../../../apis/getAkatsukiByNarutodbTypes.api';
import { Character } from '../createDataByCharactersTypes.data';
import { mapAndFindIndex } from '../../../../utils/mapAndFindIndex.util';

export const addAkatsukisToCharactersData = (
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
