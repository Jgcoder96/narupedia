import { Router } from 'express';
import { methods } from '../controllers/methods.controller';
import { schemaValidator } from '../../../middlewares/schemaValidator.middleware';
import { postCharacterSchema } from '../schema/postCharacter.schema';
import { putCharacterSchema } from '../schema/putCharacter.schema';
import { deleteCharacterSchema } from '../schema/deleteCharacter.schema';

/* router */
export const routerCharacters = Router();

/* routes characters */
routerCharacters.post(
  '/',
  schemaValidator(postCharacterSchema),
  methods.postCharacter,
);
routerCharacters.get('/', methods.getAllCharacter);
routerCharacters.get('/:id', methods.getCharacter);
routerCharacters.put(
  '/',
  schemaValidator(putCharacterSchema),
  methods.putCharacter,
);
routerCharacters.delete(
  '/',
  schemaValidator(deleteCharacterSchema),
  methods.deleteCharacter,
);
