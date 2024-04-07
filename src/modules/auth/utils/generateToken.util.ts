import jwt from 'jsonwebtoken';

export const generateToken = async (payload: string, secret: jwt.Secret) => {
  const token = jwt.sign({ id: payload }, secret, { expiresIn: 60 * 60 });
  return token;
};
