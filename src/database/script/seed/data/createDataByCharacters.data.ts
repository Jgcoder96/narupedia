import { methods } from '../../../../apis/methods.api';
import { Character } from './createDataByCharactersTypes.data';

import { addDataToCharacters } from './helpers/addDataToCharacters.helper';
import { addClansToCharactersData } from './helpers/addClansToCharactersData.helper';
import { addKekkeigenkaiToCharactersData } from './helpers/addKekkeigenkaiToCharactersData.helper';
import { addAkatsukisToCharactersData } from './helpers/addAkatsukisToCharactersData.helper';
import { addBijusToCharactersData } from './helpers/addBijusToCharactersData.helper';
import { addVillagesToCharactersData } from './helpers/addVillagesToCharactersData.helper';

export const createDataByCharacters = async () => {
  const dataCharacters = await methods.getCharacters(),
    dataVillages = await methods.getVillagesByNarutodb(),
    dataClans = await methods.getClansByNarutodb(),
    datakekkeigenkai = await methods.getKekkeigenkaiByNarutodb(),
    dataAkatsukis = await methods.getAkatzukisByNarutodb(),
    dataBijus = await methods.getBijusByNarutodb();

  const record: Character[] = [];

  if (
    dataCharacters &&
    dataClans &&
    dataVillages &&
    datakekkeigenkai &&
    dataAkatsukis &&
    dataBijus
  ) {
    addDataToCharacters(dataCharacters, record);
    addClansToCharactersData(dataClans, record);
    addVillagesToCharactersData(dataVillages, record);
    addKekkeigenkaiToCharactersData(datakekkeigenkai, record);
    addAkatsukisToCharactersData(dataAkatsukis, record);
    addBijusToCharactersData(dataBijus, record);
  }
  return record;
};
