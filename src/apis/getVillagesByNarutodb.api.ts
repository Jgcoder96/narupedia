/* import libreries */
import axios from 'axios';
/* import modules */
import { Villages } from './getVillagesByNarutodbTypes.api';
import { endPointByNarutodb } from './endPointsByNarutodb.api';

/* function getVillages */
export const getVillagesByNarutodb = async () => {
  try {
    const response = await axios.get(endPointByNarutodb.villages);
    const data: Villages = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
/*  */
