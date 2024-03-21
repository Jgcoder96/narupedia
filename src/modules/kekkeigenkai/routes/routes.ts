/* import libreries */
import { Router } from 'express';
/*  */
/* import libreries */
import { methods } from '../controllers/methods';
/*  */

/* router */
export const routerKekkeigenkai = Router();
/*  */

/* routes  kekkeigenkais*/
routerKekkeigenkai.get('/', methods.getKekkeigenkais);
routerKekkeigenkai.get('/:id', methods.getKekkeigenkai);
/*  */
