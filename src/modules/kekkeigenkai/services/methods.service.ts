import { readAllKekkeigenkai } from './readAllKekkeigenkai.service';
import { readKekkeigenkai } from './readKekkeigenkai.service';
import { createKekkeigenkai } from './createKekkeigenkai.service';
import { updateKekkeigenkai } from './updateKekkeigenkai.service';
import { deleteKekkeigenkai } from './deleteKekkeigenkai.service';

export const methods = {
  createKekkeigenkai,
  readAllKekkeigenkai,
  readKekkeigenkai,
  updateKekkeigenkai,
  deleteKekkeigenkai,
};
