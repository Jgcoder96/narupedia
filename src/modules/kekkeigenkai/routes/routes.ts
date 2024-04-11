import { Router } from 'express';
import { CONTROLLERS } from '../controllers/controllers';
import { MIDDLEWARES } from '../../../middlewares/middlewares';
import { SCHEMAS } from '../schema/schema';

export const routerKekkeigenkai = Router();

routerKekkeigenkai.get(
  '/',
  [MIDDLEWARES.verifyToken, MIDDLEWARES.verifyRol],
  CONTROLLERS.getAllKekkeigenkai,
);

routerKekkeigenkai.get(
  '/:id',
  [MIDDLEWARES.verifyToken, MIDDLEWARES.verifyRol],
  CONTROLLERS.getKekkeigenkai,
);

routerKekkeigenkai.post(
  '/',
  [
    MIDDLEWARES.schemaValidator(SCHEMAS.postKekkeigenkai),
    MIDDLEWARES.verifyToken,
    MIDDLEWARES.verifyRol,
  ],
  CONTROLLERS.postKekkeigenkai,
);

routerKekkeigenkai.put(
  '/',
  [
    MIDDLEWARES.schemaValidator(SCHEMAS.putKekkeigenkai),
    MIDDLEWARES.verifyToken,
    MIDDLEWARES.verifyRol,
  ],
  CONTROLLERS.putKekkeigenkai,
);

routerKekkeigenkai.delete(
  '/',
  [
    MIDDLEWARES.schemaValidator(SCHEMAS.deleteKekkeigenkai),
    MIDDLEWARES.verifyToken,
    MIDDLEWARES.verifyRol,
  ],
  CONTROLLERS.deleteKekkeigenkai,
);
