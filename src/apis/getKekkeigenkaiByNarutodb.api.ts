/* import libreries */
import axios from 'axios';
/*  */
/* import modules */
import { Kekkeigenkai } from './getKekkeigenkaiByNarutodbTypes.api';
import { endPointByNarutodb } from './endPointsByNarutodb.api';
/*  */

/* function getKekkeigenkai */
export const getKekkeigenkaiByNarutodb = async () => {
  try {
    const response = await axios.get(endPointByNarutodb.kekkeigenkai);
    const data: Kekkeigenkai = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
/*  */
