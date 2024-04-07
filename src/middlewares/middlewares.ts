import { schemaValidator } from './schemaValidator.middleware';
import { verifyRol } from './verifyRol.middleware';
import { verifyToken } from './verifyToken.middleware';

export const MIDDLEWARES = {
  schemaValidator,
  verifyRol,
  verifyToken,
};
