/* object endPoint */
export const endPoint: EndPoint = {
  characters: 'https://narutodb.xyz/api/character?page=1&limit=1430',
  clans: 'https://narutodb.xyz/api/clan?page=1&limit=58',
  villages: 'https://narutodb.xyz/api/village?page=1&limit=39',
  kekkeigenkai: 'https://narutodb.xyz/api/kekkei-genkai?page=1&limit=39',
  akatsukis: 'https://narutodb.xyz/api/akatsuki?page=1&limit=44',
  bijus: 'https://narutodb.xyz/api/tailed-beast',
};

/* types object endPoint */
type EndPoint = {
  characters: string;
  akatsukis: string;
  bijus: string;
  clans: string;
  villages: string;
  kekkeigenkai: string;
};
