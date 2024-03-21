import { Router } from 'express';
import { methods } from '../controllers/methods';

export const routerKekkeigenkai = Router();

routerKekkeigenkai.get('/', methods.getKekkeigenkais);
routerKekkeigenkai.get('/:id', methods.getKekkeigenkai);
