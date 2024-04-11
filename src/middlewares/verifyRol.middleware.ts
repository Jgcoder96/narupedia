import { Request, Response, NextFunction } from 'express';
import { findUserById } from '../modules/auth/models/findUserById.model';
import { LICENSE } from '../libs/licenses.libs';
import { METHODS } from '../libs/methods.libs';
import { MESSAGES } from '../libs/messages.libs';

export const verifyRol = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const method = req.method;
    const UserId = req.UserId;
    let user;
    let role;
    if (UserId) user = await findUserById(UserId);
    if (user) role = user[0][0].rol;

    if (method === METHODS.get && LICENSE.GET.includes(role)) next();
    else if (method === METHODS.post && LICENSE.POST.includes(role)) next();
    else if (method === METHODS.put && LICENSE.PUT.includes(role)) next();
    else if (method === METHODS.delete && LICENSE.DELETE.includes(role)) next();
    else
      return res
        .status(401)
        .json({ res: false, message: MESSAGES.auth.unauthorized });
  } catch (error) {
    return res
      .status(401)
      .json({ res: false, message: MESSAGES.auth.unauthorized });
  }
};
