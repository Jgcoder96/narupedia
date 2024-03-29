import { insertCharacter } from './insertCharacter.model';
import { countOfCharacter } from './countOfCharacter.model';
import { findAllCharacter } from './findAllCharacter.model';
import { findCharacterById } from './findCharacterById.model';
import { findAllCharacterWithPageAndLimit } from './findAllCharacterWithPageAndLimit.model';
import { findCharacterByMaxId } from './findCharacterByMaxId.model';
import { findCharacterByName } from './findCharacterByName.model';
import { updateCharacter } from './updateCharacter.model';
import { deleteCharacter } from './deleteCharacter.model';

export const methods = {
  insertCharacter,
  countOfCharacter,
  findCharacterById,
  findAllCharacterWithPageAndLimit,
  findAllCharacter,
  findCharacterByMaxId,
  findCharacterByName,
  updateCharacter,
  deleteCharacter,
};
