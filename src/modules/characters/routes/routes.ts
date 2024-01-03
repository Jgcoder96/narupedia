import { Router } from 'express';
import { methods } from '../controllers/methods';

export const router = Router();

router.get('/', methods.getCharacters);
