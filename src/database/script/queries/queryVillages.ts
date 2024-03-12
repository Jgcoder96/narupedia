/* import modules */
import { recordDataVillages } from '../records/villages/recordDataVillages';

/* function queryVillages */
export const queryVillages = async () => {
  const data = await recordDataVillages();
  let query = 'INSERT INTO villages (village_id, village) VALUES ';
  if (data !== undefined) {
    data.map((village) => {
      const stringVillage = `("${village.id}","${village.name}"),`;
      query = query + stringVillage;
      return query;
    });
    query = query.slice(0, -1) + ';';
  }
  console.log('query to villages created successful');
  return query;
};
/*  */
