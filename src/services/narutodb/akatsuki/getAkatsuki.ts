/* import modules */
import axios from 'axios';
import { Akatsukis } from './getAkatsukiTypes';
import { endPoint } from '../endPoints';

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
/* end function getAkatzukis */
