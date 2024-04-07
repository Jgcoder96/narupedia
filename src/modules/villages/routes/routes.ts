import { Router } from 'express';
import { methods } from '../controllers/methods.controllers';
import { postVillageSchema } from '../schema/postVillage.schema';
import { putVillageSchema } from '../schema/putVillage.schema';
import { deleteVillageSchema } from '../schema/deleteVillage.schema';
import { MIDDLEWARES } from '../../../middlewares/middlewares';

export const routerVillages = Router();

routerVillages.get(
  '/',
  [MIDDLEWARES.verifyToken, MIDDLEWARES.verifyRol],
  methods.getAllVillage,
);

routerVillages.get('/:id', methods.getVillage);

routerVillages.post(
  '/',
  MIDDLEWARES.schemaValidator(postVillageSchema),
  methods.postVillage,
);

routerVillages.put(
  '/',
  MIDDLEWARES.schemaValidator(putVillageSchema),
  methods.putVillage,
);

routerVillages.delete(
  '/',
  MIDDLEWARES.schemaValidator(deleteVillageSchema),
  methods.deleteVillage,
);
