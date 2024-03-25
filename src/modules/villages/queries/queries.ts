export const queries = {
  insertVillage: 'INSERT INTO villages (village_id, village) VALUES (?, ?);',
  selectAllVillage: 'SELECT * FROM villages;',
  selectVillageByIdOrName:
    'SELECT * FROM villages WHERE village_id = ? OR village = ?;',
  selectVillageByID: 'SELECT * FROM villages WHERE village_id = ?;',
  selectVillageByLikeId: `SELECT * FROM view_characters WHERE villages LIKE '%"id": "?"%';`,
  selectVillageByMaxId: 'SELECT MAX(village_id) AS maxId FROM villages;',
  selectVillageByName: 'SELECT * FROM villages WHERE village = ?;',
  updateVillage: 'UPDATE villages SET village = ? WHERE village_id = ?;',
  deleteVillage: 'DELETE FROM villages WHERE village_id = ?;',
};
