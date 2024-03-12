/* import modules */
import { recordDataKekkeigenkai } from '../records/kekkeigenkai/recordDataKekkeigenkai';

/* function queryClans */
export const queryKekkeigenkai = async () => {
  const data = await recordDataKekkeigenkai();
  let query =
    'INSERT INTO kekkeigenkais (kekkeigenkai_id, kekkeigenkai) VALUES ';
  if (data !== undefined) {
    data.map((kekkeigenkai) => {
      const kekkeigenkaiId = kekkeigenkai.id;
      const kekkeigenkaiName = kekkeigenkai.name;
      const stringKekkeigenkai = `("${kekkeigenkaiId}","${kekkeigenkaiName}"),`;
      query = query + stringKekkeigenkai;
      return query;
    });
    query = query.slice(0, -1) + ';';
  }
  console.log('query to kekkeigenkai created successful');
  return query;
};
/*  */
