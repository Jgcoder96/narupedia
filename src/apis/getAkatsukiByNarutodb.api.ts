/* import libreries */
import axios from 'axios';
/*  */
/* import modules */
import { Akatsukis } from './getAkatsukiByNarutodbTypes.api';
import { endPointByNarutodb } from './endPointsByNarutodb.api';
/*  */

/* function getAkatzukis */
export const getAkatzukisByNarutodb = async () => {
  try {
    const response = await axios.get(endPointByNarutodb.akatsukis);
    const data: Akatsukis = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
/*  */
