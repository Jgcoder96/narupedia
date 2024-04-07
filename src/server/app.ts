import express from 'express';
import morgan from 'morgan';
import { routerCharacters } from '../modules/characters/routes/routes';
import { routerClans } from '../modules/clans/routes/routes';
import { routerKekkeigenkai } from '../modules/kekkeigenkai/routes/routes';
import { routerVillages } from '../modules/villages/routes/routes';
import { routerAuth } from '../modules/auth/routes/routes';

export const app = express();

app.set('port', 4000);
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/auth', routerAuth);
app.use('/api/villages', routerVillages);
app.use('/api/clans', routerClans);
app.use('/api/kekkeigenkai', routerKekkeigenkai);
app.use('/api/characters', routerCharacters);
