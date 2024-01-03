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
        record[search].village = {
          id: village.id,
          name: village.name,
        };
      });
    });
  });
};
/* end function updateRecordWithVillages */
