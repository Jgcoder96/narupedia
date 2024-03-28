/* import modules */
import { Kekkeigenkai } from '../../../../apis/getKekkeigenkaiByNarutodbTypes.api';
import { Character } from '../createDataByCharactersTypes.data';
import { mapAndFindIndex } from '../../../../utils/mapAndFindIndex';
/*  */

/* function updateRecordWithKekkeigenkai */
export const addKekkeigenkaiToCharactersData = (
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
