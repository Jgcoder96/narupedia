import axios from 'axios';
import { Kekkeigenkai } from './getKekkeigenkaiByNarutodbTypes.api';
import { endPointByNarutodb } from './endPointsByNarutodb.api';

export const getKekkeigenkaiByNarutodb = async () => {
  try {
    const response = await axios.get(endPointByNarutodb.kekkeigenkai);
    const data: Kekkeigenkai = response.data;
    return data;
  } catch (error) {
    console.log(error);
  }
};
