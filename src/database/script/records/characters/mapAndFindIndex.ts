/* import modules */
import { Character } from './recordDataTypes';
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
