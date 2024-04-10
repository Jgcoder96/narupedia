import { Router } from 'express';
import { CONTROLLERS } from '../controllers/controllers';
import { MIDDLEWARES } from '../../../middlewares/middlewares';
import { SCHEMAS } from '../schemas/schemas';

export const routerAuth = Router();

routerAuth.post(
  '/signin',
  MIDDLEWARES.schemaValidator(SCHEMAS.signIn),
  CONTROLLERS.signIn,
);
routerAuth.post(
  '/signup',
  MIDDLEWARES.schemaValidator(SCHEMAS.signUp),
  CONTROLLERS.signUp,
);
