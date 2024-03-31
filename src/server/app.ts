import express from 'express';
import { routerCharacters } from '../modules/characters/routes/routes';
import { routerClans } from '../modules/clans/routes/routes';
import { routerKekkeigenkai } from '../modules/kekkeigenkai/routes/routes';
import { routerVillages } from '../modules/villages/routes/routes';

export const app = express();

app.set('port', 4000);
app.use(express.json());

app.use('/api/villages', routerVillages);
app.use('/api/clans', routerClans);
app.use('/api/kekkeigenkai', routerKekkeigenkai);
app.use('/api/characters', routerCharacters);
