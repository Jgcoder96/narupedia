/* import libreries */
import { Router } from 'express';
/*  */
/* import modules */
import { methods } from '../controllers/methods';
/*  */

/* router */
export const routerVillages = Router();
/*  */

/* routes villages */
routerVillages.get('/', methods.getVillages);
routerVillages.get('/:id', methods.getVillage);
/*  */
