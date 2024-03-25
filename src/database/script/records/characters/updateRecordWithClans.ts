/* import modules */
import { Clans } from '../../../../services/clans/getClansTypes';
import { Character } from './recordDataTypes';
import { mapAndFindIndex } from './mapAndFindIndex';
/*  */

/* function updateRecordWithClans */
export const updateRecordWithClans = (data: Clans, record: Character[]) => {
  data.clans.map((clan) => {
    clan.characters.map((element) => {
      mapAndFindIndex(record, element.id, (search) => {
        if (!record[search].clan) {
          const arrayObject: { id?: number; name?: string }[] = [];
          const info: { id?: number; name?: string } = {};
          info.id = clan.id;
          info.name = clan.name;
          arrayObject.push(info);
          record[search].clan = arrayObject;
        } else {
          const info: { id?: number; name?: string } = {};
          info.id = clan.id;
          info.name = clan.name;
          record[search].clan?.push(info);
        }
      });
    });
  });
};
/*  */
