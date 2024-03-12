/* import libreries */
import axios from 'axios';
/*  */
/* import modules */
import { Akatsukis } from './getAkatsukiTypes';
import { endPoint } from '../endPoints';
/*  */

/* function getAkatzukis */
export const getAkatzukis = async () => {
  try {
    const response = await axios.get(endPoint.akatsukis);
    const data: Akatsukis = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
/*  */
