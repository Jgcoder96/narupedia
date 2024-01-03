/* import modules */
import axios from 'axios';
import { Clans } from './getClansTypes';
import { endPoint } from '../endPoints';

/* function getClans */
export const getClans = async () => {
  try {
    const response = await axios.get(endPoint.clans);
    const data: Clans = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
/* end function getClans */
