import { insertClan } from './insertClan.model';
import { findAllClan } from './findAllClan.model';
import { findClanById } from './findClanById.model';
import { findClanByLikeId } from './findClanByLikeId.model';
import { findClanByMaxId } from './findClanByMaxId.model';
import { findClanByName } from './findClanByName.model';
import { updateClan } from './updateClan.model';
import { deleteClan } from './deleteClan.model';

export const MODELS = {
  insertClan,
  findAllClan,
  findClanById,
  findClanByLikeId,
  findClanByMaxId,
  findClanByName,
  updateClan,
  deleteClan,
};
