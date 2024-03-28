/* import libreries */
import axios from 'axios';
/*  */
/* import modules */
import { Bijus } from './getBijusByNarutodbTypes.api';
import { endPointByNarutodb } from './endPointsByNarutodb.api';
/*  */

/* function getBijus */
export const getBijusByNarutodb = async () => {
  try {
    const response = await axios.get(endPointByNarutodb.bijus);
    const data: Bijus = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
/*  */
