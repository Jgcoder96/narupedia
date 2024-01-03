/* import modules */
import { request } from '../../../../services/narutodb/request';
import { Character } from './recordDataTypes';
import { updateRecordWithCharacters } from './updateRecordWithCharacters';
import { updateRecordWithClans } from './updateRecordWithClans';
import { updateRecordWithVillages } from './updateRecordWithVillages';
import { updateRecordWithKekkeigenkai } from './updateRecordWithKekkeigenkai';
import { updateRecordWithAkatsuki } from './updateRecordWithAkatsuki';
import { updateRecordWithBijus } from './updateRecordWithBijus';

/* function recordCharacters */
export const recordData = async () => {
  /* request */
  const dataCharacters = await request.getCharacters();
  const dataVillages = await request.getVillages();
  const dataClans = await request.getClans();
  const datakekkeigenkai = await request.getKekkeigenkai();
  const dataAkatsukis = await request.getAkatzukis();
  const dataBijus = await request.getBijus();

  /* record characters */
  const record: Character[] = [];

  /* conditional */
  if (
    dataCharacters &&
    dataClans &&
    dataVillages &&
    datakekkeigenkai &&
    dataAkatsukis &&
    dataBijus
  ) {
    updateRecordWithCharacters(dataCharacters, record);
    updateRecordWithClans(dataClans, record);
    updateRecordWithVillages(dataVillages, record);
    updateRecordWithKekkeigenkai(datakekkeigenkai, record);
    updateRecordWithAkatsuki(dataAkatsukis, record);
    updateRecordWithBijus(dataBijus, record);
  }
  /* end conditional */

  console.log(record[1127]);
};
/* end function recordCharacters */

recordData();
