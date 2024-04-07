import { Request, Response } from 'express';
import { encryptPassword } from '../utils/encryptPassword.util';
import { services } from '../services/services';

export const signUp = async (req: Request, res: Response) => {
  const { username, email, password, rol } = req.body;
  const passwordEncryptt = await encryptPassword(password);
  const creationResult = await services.signUp(
    username,
    email,
    passwordEncryptt,
    rol,
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
