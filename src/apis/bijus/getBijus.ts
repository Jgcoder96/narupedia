/* import libreries */
import axios from 'axios';
/*  */
/* import modules */
import { Bijus } from './getBijusTypes';
import { endPoint } from '../endPoints';
/*  */

/* function getBijus */
export const getBijus = async () => {
  try {
    const response = await axios.get(endPoint.bijus);
    const data: Bijus = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
/*  */
