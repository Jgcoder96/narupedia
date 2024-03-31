import axios from 'axios';
import { Characters } from './getCharactersByNarutodbTypes.api';
import { endPointByNarutodb } from './endPointsByNarutodb.api';

export const getCharacters = async () => {
  try {
    const response = await axios.get(endPointByNarutodb.characters);
    const data: Characters = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
