/* import libreries */
import axios from 'axios';
/*  */
/* import modules */
import { Characters } from './getCharactersTypes';
import { endPoint } from '../endPoints';
/*  */

/* function getCharacters */
export const getCharacters = async () => {
  try {
    const response = await axios.get(endPoint.characters);
    const data: Characters = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
/*  */
