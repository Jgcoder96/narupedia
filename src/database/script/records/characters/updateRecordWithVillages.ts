/* import modules */
import { Villages } from '../../../../services/narutodb/villages/getVillagesTypes';
import { Character } from './recordDataTypes';
import { mapAndFindIndex } from './mapAndFindIndex';

/* function updateRecordWithVillages */
export const updateRecordWithVillages = (
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

/* end function updateRecordWithVillages */
