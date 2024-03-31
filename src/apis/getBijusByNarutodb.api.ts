import axios from 'axios';
import { Bijus } from './getBijusByNarutodbTypes.api';
import { endPointByNarutodb } from './endPointsByNarutodb.api';

export const getBijusByNarutodb = async () => {
  try {
    const response = await axios.get(endPointByNarutodb.bijus);
    const data: Bijus = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
