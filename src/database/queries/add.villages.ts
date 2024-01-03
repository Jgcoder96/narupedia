import { getVillages } from '../../services/narutodb/villages/getVillages';

export const addVillages = async () => {
  const data = await getVillages();
  let query = 'INSERT INTO villages (id, name) VALUES ';
  if (data !== undefined) {
    data.villages.map((village) => {
      const villageId = village.id;
      const villageName = village.name;
      const stringVillage = `("${villageId}","${villageName}"),`;
      query = query + stringVillage;
      return query;
    });
    query = query.slice(0, -1) + ';';
  }
  console.log(query);
};

addVillages();
