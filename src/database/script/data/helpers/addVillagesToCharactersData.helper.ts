/* import modules */
import { Villages } from '../../../../apis/getVillagesByNarutodbTypes.api';
import { Character } from '../createDataByCharactersTypes.data';
import { mapAndFindIndex } from '../../../../utils/mapAndFindIndex.util';
/*  */

/* function updateRecordWithVillages */
export const addVillagesToCharactersData = (
  data: Villages,
  record: Character[],
) => {
  data.villages.map((village) => {
    village.characters.map((element) => {
      mapAndFindIndex(record, element.id, (search) => {
        if (!record[search].village) {
          const arrayObject: { id?: number; name?: string }[] = [];
          const info: { id?: number; name?: string } = {};
          info.id = village.id;
          info.name = village.name;
          arrayObject.push(info);
          record[search].village = arrayObject;
        } else {
          const info: { id?: number; name?: string } = {};
          info.id = village.id;
          info.name = village.name;
          record[search].village?.push(info);
        }
      });
    });
  });
};
/*  */
