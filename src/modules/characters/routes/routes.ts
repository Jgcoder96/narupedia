import { Router } from 'express';
import { CONTROLLERS } from '../controllers/controllers';
import { SCHEMAS } from '../schema/schema';
import { MIDDLEWARES } from '../../../middlewares/middlewares';

export const routerCharacters = Router();

routerCharacters.get(
  '/',
  [MIDDLEWARES.verifyToken, MIDDLEWARES.verifyRol],
  CONTROLLERS.getAllCharacter,
);

routerCharacters.get(
  '/:id',
  [MIDDLEWARES.verifyToken, MIDDLEWARES.verifyRol],
  CONTROLLERS.getCharacter,
);

routerCharacters.post(
  '/',
  [
    MIDDLEWARES.schemaValidator(SCHEMAS.postCharacter),
    MIDDLEWARES.verifyToken,
    MIDDLEWARES.verifyRol,
  ],
  CONTROLLERS.postCharacter,
);

routerCharacters.put(
  '/',
  [
    MIDDLEWARES.schemaValidator(SCHEMAS.putCharacter),
    MIDDLEWARES.verifyToken,
    MIDDLEWARES.verifyRol,
  ],
  CONTROLLERS.putCharacter,
);

routerCharacters.delete(
  '/',
  [
    MIDDLEWARES.schemaValidator(SCHEMAS.deleteCharacter),
    MIDDLEWARES.verifyToken,
    MIDDLEWARES.verifyRol,
  ],
  CONTROLLERS.deleteCharacter,
);
