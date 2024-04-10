import { Request, Response } from 'express';
import { SERVICES } from '../services/services';

export const signIn = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const signInResult = await SERVICES.signIn(username, password);
  if (signInResult && signInResult.procced) {
    res.status(200).json({
      res: signInResult.procced,
      message: signInResult.message,
      token: signInResult.token,
    });
  } else {
    res.status(401).json({
      res: signInResult.procced,
      message: signInResult.message,
    });
  }
};
