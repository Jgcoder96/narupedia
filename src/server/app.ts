import express from 'express';
import { router } from '../modules/characters/routes/routes';

export const app = express();

// Settings
app.set('port', 4000);

// Middlewares
app.use(express.json());

// routes
app.use('/api/characters', router);
