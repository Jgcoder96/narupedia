/* import libreries */
import axios from 'axios';
/*  */
/* import modules */
import { Characters } from './getCharactersByNarutodbTypes.api';
import { endPointByNarutodb } from './endPointsByNarutodb.api';
/*  */

/* function getCharacters */
export const getCharacters = async () => {
  try {
    const response = await axios.get(endPointByNarutodb.characters);
    const data: Characters = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
/*  */
