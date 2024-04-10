import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config/config';
import { findUserById } from '../modules/auth/models/findUserById.model';
import { MESSAGES } from '../libs/messages.libs';

declare module 'express-serve-static-core' {
  interface Request {
    UserId?: string;
  }
}
export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token =
      typeof req.headers['x-access-token'] === 'string'
        ? req.headers['x-access-token']
        : undefined;

    if (!token)
      return res
        .status(403)
        .json({ res: false, message: MESSAGES.auth.notToken });

    if (!config.secret)
      return res
        .status(403)
        .json({ res: false, message: MESSAGES.server.secretWordNotExist });

    const secret = config.secret;

    const decoded = jwt.verify(token, secret);

    let existUser;

    if (typeof decoded !== 'string') {
      existUser = await findUserById(decoded.id);
      req.UserId = decoded.id;
    }

    if (existUser && existUser[0].length === 0)
      return res
        .status(404)
        .json({ res: false, message: MESSAGES.auth.usernameNotFound });

    next();
  } catch (error) {
    return res
      .status(401)
      .json({ res: false, message: MESSAGES.auth.unauthorized });
  }
};
