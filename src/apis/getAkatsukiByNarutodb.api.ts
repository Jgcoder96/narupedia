import axios from 'axios';
import { Akatsukis } from './getAkatsukiByNarutodbTypes.api';
import { endPointByNarutodb } from './endPointsByNarutodb.api';

export const getAkatzukisByNarutodb = async () => {
  try {
    const response = await axios.get(endPointByNarutodb.akatsukis);
    const data: Akatsukis = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
