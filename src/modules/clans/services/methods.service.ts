import { readAllClan } from './readAllClan.service';
import { readClan } from './readClan.service';
import { createClan } from './createClan.service';
import { updateClan } from './updateClan.service';
import { deleteClan } from './deleteClan.service';

export const methods = {
  createClan,
  readAllClan,
  readClan,
  updateClan,
  deleteClan,
};
