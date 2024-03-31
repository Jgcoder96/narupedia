import { Router } from 'express';
import { methods } from '../controllers/methods.controller';
import { schemaValidator } from '../../../middlewares/schemaValidator.middleware';
import { postClanSchema } from '../schema/postClan.schema';
import { putClanSchema } from '../schema/putClan.schema';
import { deleteClanSchema } from '../schema/deleteClansSchema';

export const routerClans = Router();

routerClans.get('/', methods.getAllClan);
routerClans.get('/:id', methods.getClan);
routerClans.post('/', schemaValidator(postClanSchema), methods.postClan);
routerClans.put('/', schemaValidator(putClanSchema), methods.putClan);
routerClans.delete('/', schemaValidator(deleteClanSchema), methods.deleteClan);
