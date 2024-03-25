/* import libreries */
import axios from 'axios';
/* import modules */
import { Villages } from './getVillagesTypes';
import { endPoint } from '../endPoints';

/* function getVillages */
export const getVillages = async () => {
  try {
    const response = await axios.get(endPoint.villages);
    const data: Villages = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
/*  */
