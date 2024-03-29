export const queries = {
  insertCharacter:
    'INSERT INTO characters (character_id, name, image) VALUES (?, ?, ?);',
  selectAllCharacter: 'SELECT * FROM view_characters;',
  selectCharacterById: 'SELECT * FROM view_characters WHERE character_id = ?;',
  selectAllCharacterWithPageAndLimit:
    'SELECT * FROM view_characters LIMIT ?, ?;',
  selectCharacterByMaxId: 'SELECT MAX(character_id) AS maxId FROM characters;',
  selectCharacterByName: 'SELECT * FROM characters WHERE name = ?;',
  countOfCharacter: 'SELECT COUNT(*) AS pages FROM view_characters;',
  updateCharacter:
    'UPDATE characters SET name = ?, image = ? WHERE character_id = ?;',
  deleteCharacter: 'DELETE FROM characters WHERE character_id = ?;',
};
