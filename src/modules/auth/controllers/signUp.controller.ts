import { Request, Response } from 'express';
import { SERVICES } from '../services/services';
import { UTILS } from '../utils/utils';

export const signUp = async (req: Request, res: Response) => {
  const { username, email, password } = req.body;
  const passwordEncryptt = await UTILS.encryptPassword(password);
  const creationResult = await SERVICES.signUp(
    username,
    email,
    passwordEncryptt,
    'USER',
  );

  if (!creationResult.procced) {
    res.status(401).json({
      res: creationResult.procced,
      message: creationResult.message,
    });
  } else {
    res.status(200).json({
      res: creationResult.procced,
      message: creationResult.message,
      token: creationResult.token,
    });
  }
};
