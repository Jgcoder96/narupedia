import { insertUser } from './insertUser.model';
import { insertRolWithUser } from './insertRolWithUser.model';
import { findUserById } from './findUserById.model';
import { findUserByUsername } from './findUserByUsername.model';
import { findUserByEmail } from './findUserByEmail.model';
import { findRoleByName } from './findRoleByName.model';

export const models = {
  insertUser,
  insertRolWithUser,
  findUserById,
  findUserByUsername,
  findUserByEmail,
  findRoleByName,
};
