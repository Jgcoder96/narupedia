import { Router } from 'express';
import { methods } from '../controllers/methods';

export const routerVillages = Router();

routerVillages.get('/', methods.getVillages);
routerVillages.get('/:id', methods.getVillage);
