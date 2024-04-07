import { ROLES } from './roles.libs';

export const LICENSE = {
  POST: [ROLES.admin, ROLES.superAdmin],
  GET: [ROLES.user, ROLES.moderator, ROLES.admin, ROLES.superAdmin],
  PUT: [ROLES.moderator, ROLES.admin, ROLES.superAdmin],
  DELETE: [ROLES.admin, ROLES.superAdmin],
};
