import { readCharacter } from './readCharacter.service';
import { readAllCharacter } from './readAllCharacter.service';
import { readAllCharacterWithPage } from './readAllCharacterWithPage.service';
import { createCharacter } from './createCharacter.service';
import { updateCharacter } from './updateCharacter.service';
import { deleteCharacter } from './deleteCharacter.service';

export const SERVICES = {
  createCharacter,
  readCharacter,
  readAllCharacterWithPage,
  readAllCharacter,
  updateCharacter,
  deleteCharacter,
};
