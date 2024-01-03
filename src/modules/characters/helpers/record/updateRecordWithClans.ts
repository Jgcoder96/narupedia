/* import modules */
import { Clans } from '../../../../services/narutodb/clans/getClansTypes';
import { Character } from './recordDataTypes';
import { mapAndFindIndex } from './mapAndFindIndex';

/* function updateRecordWithClans */
export const updateRecordWithClans = (data: Clans, record: Character[]) => {
  data.clans.map((clan) => {
    clan.characters.map((element) => {
      mapAndFindIndex(record, element.id, (search) => {
        record[search].clan = {
          id: clan.id,
          name: clan.name,
        };
      });
    });
  });
};
/* end function updateRecordWithClans */
