import { Character } from '../database/script/seed/data/createDataByCharactersTypes.data';

export const mapAndFindIndex = (
  array: Character[],
  id: number,
  callback: (search: number) => void,
): void => {
  const search = array.findIndex((value) => value.id === id);
  if (search !== -1) callback(search);
};
