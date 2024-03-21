import { Router } from 'express';
import { methods } from '../controllers/methods';

export const routerCharacters = Router();

routerCharacters.get('/', methods.getCharacters);
routerCharacters.get('/:id', methods.getCharacter);
