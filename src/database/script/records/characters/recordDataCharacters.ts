/* import modules */
import { request } from '../../../../services/narutodb/request';
import { Character } from './recordDataTypes';
import { updateRecordWithCharacters } from './updateRecordWithCharacters';
import { updateRecordWithClans } from './updateRecordWithClans';
import { updateRecordWithVillages } from './updateRecordWithVillages';
import { updateRecordWithKekkeigenkai } from './updateRecordWithKekkeigenkai';
import { updateRecordWithAkatsuki } from './updateRecordWithAkatsuki';
import { updateRecordWithBijus } from './updateRecordWithBijus';
/*  */

/* function recordDataCharacters */
export const recordDataCharacters = async () => {
  /* request */
  const dataCharacters = await request.getCharacters(),
    dataVillages = await request.getVillages(),
    dataClans = await request.getClans(),
    datakekkeigenkai = await request.getKekkeigenkai(),
    dataAkatsukis = await request.getAkatzukis(),
    dataBijus = await request.getBijus();
  /*  */

  /* record character */
  const record: Character[] = [];
  /*  */

  /* update record */
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
  /*  */
  return record;
};
/*  */
