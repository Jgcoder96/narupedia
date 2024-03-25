/* import libreries */
import { Router } from 'express';
/*  */
/* import libreries */
import { methods } from '../controllers/methods.controller';
import { schemaValidator } from '../../../middlewares/schemaValidator.middleware';
import { postKekkeigenkaiSchema } from '../schema/postKekkeigenkai.schema';
import { putKekkeigenkaiSchema } from '../schema/putKekkeigenkai.schema';
import { deleteKekkeigenkaiSchema } from '../schema/deleteKekkeigenkai.schema';

/*  */

/* router */
export const routerKekkeigenkai = Router();
/*  */

/* routes  kekkeigenkais*/
routerKekkeigenkai.post(
  '/',
  schemaValidator(postKekkeigenkaiSchema),
  methods.postKekkeigenkai,
);
routerKekkeigenkai.get('/', methods.getAllKekkeigenkai);
routerKekkeigenkai.get('/:id', methods.getKekkeigenkai);
routerKekkeigenkai.put(
  '/',
  schemaValidator(putKekkeigenkaiSchema),
  methods.putKekkeigenkai,
);
routerKekkeigenkai.delete(
  '/',
  schemaValidator(deleteKekkeigenkaiSchema),
  methods.deleteKekkeigenkai,
);
/*  */
