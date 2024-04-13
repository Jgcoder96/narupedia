import { readAllClan } from './readAllClan.service';
import { readClan } from './readClan.service';
import { createClan } from './createClan.service';
import { updateClan } from './updateClan.service';
import { deleteClan } from './deleteClan.service';

export const SERVICES = {
  createClan,
  readAllClan,
  readClan,
  updateClan,
  deleteClan,
};
