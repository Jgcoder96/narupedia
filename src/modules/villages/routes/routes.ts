/* import libreries */
import { Router } from 'express';
/*  */
/* import modules */
import { methods } from '../controllers/methods.controllers';
import { schemaValidator } from '../../../middlewares/schemaValidator.middleware';
import { postVillageSchema } from '../schema/postVillage.schema';
import { putVillageSchema } from '../schema/putVillage.schema';
import { deleteVillageSchema } from '../schema/deleteVillage.schema';
/*  */

/* router */
export const routerVillages = Router();
/*  */

/* routes villages */
routerVillages.get('/', methods.getAllVillage);
routerVillages.get('/:id', methods.getVillage);
routerVillages.post(
  '/',
  schemaValidator(postVillageSchema),
  methods.postVillage,
);
routerVillages.put('/', schemaValidator(putVillageSchema), methods.putVillage);
routerVillages.delete(
  '/',
  schemaValidator(deleteVillageSchema),
  methods.deleteVillage,
);
/*  */
