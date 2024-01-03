/* import modules */
import { Kekkeigenkai } from '../../../../services/narutodb/kekkeigenkai/getKekkeigenkaiTypes';
import { Character } from './recordDataTypes';
import { mapAndFindIndex } from './mapAndFindIndex';

/* function updateRecordWithKekkeigenkai */
export const updateRecordWithKekkeigenkai = (
  data: Kekkeigenkai,
  record: Character[],
) => {
  data.kekkeigenkai.map((kekkeigenkai) => {
    kekkeigenkai.characters.map((element) => {
      mapAndFindIndex(record, element.id, (search) => {
        record[search].kekkeigenkai = {
          id: kekkeigenkai.id,
          name: kekkeigenkai.name,
        };
      });
    });
  });
};
/* end function updateRecordWithKekkeigenkai */
