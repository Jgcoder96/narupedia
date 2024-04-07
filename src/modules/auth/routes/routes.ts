import { Router } from 'express';
import { methods } from '../controllers/methods.controller';

export const routerAuth = Router();

routerAuth.post('/signin', methods.signIn);
routerAuth.post('/signup', methods.signUp);
