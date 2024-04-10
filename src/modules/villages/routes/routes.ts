import { Router } from 'express';
import { CONTROLLERS } from '../controllers/controllers';
import { postVillageSchema } from '../schema/postVillage.schema';
import { MIDDLEWARES } from '../../../middlewares/middlewares';

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
    MIDDLEWARES.schemaValidator(postVillageSchema),
    MIDDLEWARES.verifyToken,
    MIDDLEWARES.verifyRol,
  ],
  CONTROLLERS.postVillage,
);

routerVillages.put(
  '/',
  [
    MIDDLEWARES.schemaValidator(postVillageSchema),
    MIDDLEWARES.verifyToken,
    MIDDLEWARES.verifyRol,
  ],
  CONTROLLERS.putVillage,
);

routerVillages.delete(
  '/',
  [
    MIDDLEWARES.schemaValidator(postVillageSchema),
    MIDDLEWARES.verifyToken,
    MIDDLEWARES.verifyRol,
  ],
  CONTROLLERS.deleteVillage,
);
