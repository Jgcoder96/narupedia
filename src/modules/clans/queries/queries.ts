export const queries = {
  insertClan: 'INSERT INTO clans (clan_id, clan) VALUES (?, ?);',
  selectAllClan: 'SELECT * FROM clans;',
  selectClanById: 'SELECT * FROM clans WHERE clan_id = ?;',
  selectClanByLikeId: `SELECT * FROM view_characters WHERE clans LIKE '%"id": "?"%';`,
  selectClanByMaxId: 'SELECT MAX(clan_id) AS maxId FROM clans;',
  selectClanByName: 'SELECT * FROM clans WHERE clan = ?;',
  updateClan: 'UPDATE clans SET clan = ? WHERE clan_id = ?;',
  deleteClan: 'DELETE FROM clans WHERE clan_id = ?;',
};
