/* import modules */
import { Character } from '../database/script/data/createDataByCharactersTypes.data';
/*  */

/* function mapAndFindIndex */
export const mapAndFindIndex = (
  array: Character[],
  id: number,
  callback: (search: number) => void,
): void => {
  const search = array.findIndex((value) => value.id === id);
  if (search !== -1) callback(search);
};
/*  */
