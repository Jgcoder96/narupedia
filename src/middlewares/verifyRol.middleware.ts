import { Request, Response, NextFunction } from 'express';
import { findUserById } from '../modules/auth/models/findUserById.model';
import { MESSAGES } from '../libs/messages.libs';
import { getMethodsAndRoles } from '../utils/getMethodsAndRoles';

export const verifyRol = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const method = req.method;
    const UserId = req.UserId;
    const permissions = await getMethodsAndRoles();
    const permissionsAdmin = permissions[0];
    const permissionsUser = permissions[1];

    let user;
    let role;
    let found;

    if (UserId) user = await findUserById(UserId);

    if (user) role = user[0][0].roles;

    if (role === 'ADMIN') {
      found = permissionsAdmin.find((element) => element.method === method);
    } else if (role === 'USER') {
      found = permissionsUser.find((element) => element.method === method);
    }

    if (!found) {
      {
        return res
          .status(401)
          .json({ res: false, message: MESSAGES.auth.unauthorized });
      }
    } else {
      next();
    }
  } catch (error) {
    return res
      .status(401)
      .json({ res: false, message: MESSAGES.auth.unauthorized });
  }
};
