import { getKekkeigenkai } from '../../services/narutodb/kekkeigenkai/getKekkeigenkai';

export const addKekkeigenkai = async () => {
  const data = await getKekkeigenkai();
  let query = 'INSERT INTO kekkeigenkai (id, name) VALUES ';
  if (data !== undefined) {
    data.kekkeigenkai.map((kekkeigenkai) => {
      const kekkeigenkaiId = kekkeigenkai.id;
      const kekkeigenkaiName = kekkeigenkai.name;
      const stringKekkeigenkai = `("${kekkeigenkaiId}","${kekkeigenkaiName}"),`;
      query = query + stringKekkeigenkai;
      return query;
    });
    query = query.slice(0, -1) + ';';
  }
  console.log(query);
};

addKekkeigenkai();
