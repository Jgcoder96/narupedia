export const queries = {
  insertKekkeigenkai:
    'INSERT INTO kekkeigenkais (kekkeigenkai_id, kekkeigenkai) VALUES (?, ?);',
  selectAllKekkeigenkai: 'SELECT * FROM kekkeigenkais;',
  selectKekkeigenkaiById:
    'SELECT * FROM kekkeigenkais WHERE kekkeigenkai_id = ?;',
  selectKekkeigenkaiByLikeId: `SELECT * FROM view_characters WHERE kekkeigenkais LIKE '%"id": "?"%';`,
  selectKekkeigenkaiByMaxId:
    'SELECT MAX(kekkeigenkai_id) AS maxId FROM kekkeigenkais;',
  selectKekkeigenkaiByName:
    'SELECT * FROM kekkeigenkais WHERE kekkeigenkai = ?;',
  updateKekkeigenkai:
    'UPDATE kekkeigenkais SET kekkeigenkai = ? WHERE kekkeigenkai_id = ?;',
  deleteKekkeigenkai: 'DELETE FROM kekkeigenkais WHERE kekkeigenkai_id = ?;',
};
