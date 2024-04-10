import { insertVillage } from './insertVillage.model';
import { findAllVillage } from './findAllVillage.model';
import { findVillageById } from './findVillageById.model';
import { findVillageByIdOrName } from './findVillageByIdOrName.model';
import { findVillageByLikeId } from './findVillageByLikeId.models';
import { findVillageByMaxId } from './findVillageByMaxId.model';
import { findVillageByName } from './findVillageByName.model';
import { updateVillage } from './updateVillage.model';
import { deleteVillage } from './deleteVillage.model';

export const MODELS = {
  insertVillage,
  findAllVillage,
  findVillageById,
  findVillageByIdOrName,
  findVillageByLikeId,
  findVillageByMaxId,
  findVillageByName,
  updateVillage,
  deleteVillage,
};
