/* import modules */
import { methods } from '../../data/methods.data';

/* function queryClans */
export const createQueryOfKekkeigenkai = async () => {
  const data = await methods.createDataByKekkeigenkai();
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
