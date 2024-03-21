/* import libreries */
import { Router } from 'express';
/*  */
/* import modules */
import { methods } from '../controllers/methods';
/*  */

/* router */
export const routerClans = Router();
/*  */

/* routes clans */
routerClans.get('/', methods.getClans);
routerClans.get('/:id', methods.getClan);
/*  */
