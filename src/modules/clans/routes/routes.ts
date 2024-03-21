import { Router } from 'express';
import { methods } from '../controllers/methods';

export const routerClans = Router();

routerClans.get('/', methods.getClans);
routerClans.get('/:id', methods.getClan);
