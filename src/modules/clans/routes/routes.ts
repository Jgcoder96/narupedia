import { Router } from 'express';
import { methods } from '../controllers/methods.controller';
import { SCHEMAS } from '../schema/schemas';
import { MIDDLEWARES } from '../../../middlewares/middlewares';

export const routerClans = Router();

routerClans.get(
  '/',
  [MIDDLEWARES.verifyToken, MIDDLEWARES.verifyRol],
  methods.getAllClan,
);

routerClans.get(
  '/:id',
  [MIDDLEWARES.verifyToken, MIDDLEWARES.verifyRol],
  methods.getClan,
);

routerClans.post(
  '/',
  [
    MIDDLEWARES.schemaValidator(SCHEMAS.postClan),
    MIDDLEWARES.verifyToken,
    MIDDLEWARES.verifyRol,
  ],
  methods.postClan,
);
routerClans.put(
  '/',
  [
    MIDDLEWARES.schemaValidator(SCHEMAS.putClan),
    MIDDLEWARES.verifyToken,
    MIDDLEWARES.verifyRol,
  ],
  methods.putClan,
);
routerClans.delete(
  '/',
  [
    MIDDLEWARES.schemaValidator(SCHEMAS.deleteClan),
    MIDDLEWARES.verifyToken,
    MIDDLEWARES.verifyRol,
  ],
  methods.deleteClan,
);
