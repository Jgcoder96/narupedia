import { getBijus } from '../../services/narutodb/bijus/getBijus';

export const addBijus = async () => {
  const data = await getBijus();
  let query = 'INSERT INTO bijus (id, name) VALUES ';
  if (data !== undefined) {
    data.tailedBeasts.map((biju) => {
      const bijuId = biju.id;
      const bijuName = biju.name;
      const stringBiju = `("${bijuId}","${bijuName}"),`;
      query = query + stringBiju;
    });
    query = query.slice(0, -1) + ';';
  }
  console.log(query);
};

addBijus();
