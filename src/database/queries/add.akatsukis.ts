import { getAkatzukis } from '../../services/narutodb/akatsuki/getAkatsuki';

export const addAkatzukis = async () => {
  const data = await getAkatzukis();
  let query = 'INSERT INTO akatsukis (id, name) VALUES ';
  if (data !== undefined) {
    data.akatsuki.map((akatsuki) => {
      const akatsukiName = akatsuki.name;
      const akatsukiId = akatsuki.id;
      const stringAkatsuki = `("${akatsukiId}","${akatsukiName}"),`;
      query = query + stringAkatsuki;
      return query;
    });
    query = query.slice(0, -1) + ';';
  }
  console.log(query);
};

addAkatzukis();
