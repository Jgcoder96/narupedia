/* import modules */
import { getCharacters } from './characters/getCharacters';
import { getVillages } from './villages/getVillages';
import { getClans } from './clans/getClans';
import { getKekkeigenkai } from './kekkeigenkai/getKekkeigenkai';
import { getAkatzukis } from './akatsuki/getAkatsuki';
import { getBijus } from './bijus/getBijus';

/* object request */
export const request = {
  getCharacters,
  getVillages,
  getClans,
  getKekkeigenkai,
  getAkatzukis,
  getBijus,
};
