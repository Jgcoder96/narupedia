import { Router } from 'express';
import { CONTROLLERS } from '../controllers/controllers';
import { MIDDLEWARES } from '../../../middlewares/middlewares';
import { SCHEMAS } from '../schema/schema';

export const routerVillages = Router();

routerVillages.get(
  '/',
  [MIDDLEWARES.verifyToken, MIDDLEWARES.verifyRol],
  CONTROLLERS.getAllVillage,
);

routerVillages.get(
  '/:id',
  [MIDDLEWARES.verifyToken, MIDDLEWARES.verifyRol],
  CONTROLLERS.getVillage,
);

routerVillages.post(
  '/',
  [
    MIDDLEWARES.schemaValidator(SCHEMAS.postVillage),
    MIDDLEWARES.verifyToken,
    MIDDLEWARES.verifyRol,
  ],
  CONTROLLERS.postVillage,
);

routerVillages.put(
  '/',
  [
    MIDDLEWARES.schemaValidator(SCHEMAS.putVillage),
    MIDDLEWARES.verifyToken,
    MIDDLEWARES.verifyRol,
  ],
  CONTROLLERS.putVillage,
);

routerVillages.delete(
  '/',
  [
    MIDDLEWARES.schemaValidator(SCHEMAS.deleteVillage),
    MIDDLEWARES.verifyToken,
    MIDDLEWARES.verifyRol,
  ],
  CONTROLLERS.deleteVillage,
);
