/* import modules */
import axios from 'axios';
import { Kekkeigenkai } from './getKekkeigenkaiTypes';
import { endPoint } from '../endPoints';

/* function getKekkeigenkai */
export const getKekkeigenkai = async () => {
  try {
    const response = await axios.get(endPoint.kekkeigenkai);
    const data: Kekkeigenkai = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
/* end function getKekkeigenkai */
