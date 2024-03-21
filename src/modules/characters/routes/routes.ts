/* import libreries */
import { Router } from 'express';
/*  */
/* import modules */
import { methods } from '../controllers/methods';
/*  */

/* router */
export const routerCharacters = Router();
/*  */

/* routes characters */
routerCharacters.get('/', methods.getCharacters);
routerCharacters.get('/:id', methods.getCharacter);
/*  */
