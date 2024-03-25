import { findAllKekkeigenkai } from './findAllKekkeigenkai.model';
import { findKekkeigenkaiById } from './findKekkeigenkaiById.model';
import { findKekkeigenkaiByLikeId } from './findKekkeigenkaiByLikeId.model';
import { findKekkeigenkaiByMaxId } from './findKekkeigenkaiByMaxId.model';
import { findKekkeigenkaiByName } from './findKekkeigenkaiByName.model';
import { insertKekkeigenkai } from './insertKekkeigenkai.model';
import { updateKekkeigenkai } from './updateKekkeigenkai.model';
import { deleteKekkeigenkai } from './deleteKekkeigenkai.model';

export const methods = {
  insertKekkeigenkai,
  findAllKekkeigenkai,
  findKekkeigenkaiById,
  findKekkeigenkaiByLikeId,
  findKekkeigenkaiByMaxId,
  findKekkeigenkaiByName,
  updateKekkeigenkai,
  deleteKekkeigenkai,
};
