/* import libreries */
import axios from 'axios';
/*  */
/* import modules */
import { Clans } from './getClansByNarutodbTypes.api';
import { endPointByNarutodb } from './endPointsByNarutodb.api';
/*  */

/* function getClans */
export const getClansByNarutodb = async () => {
  try {
    const response = await axios.get(endPointByNarutodb.clans);
    const data: Clans = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
/*  */
