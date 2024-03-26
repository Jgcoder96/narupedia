import { methods } from '../models/methods.model';

export const readAllClan = async () => {
  const existingClan = await methods.findAllClan();
  if (existingClan[0].length > 0) {
    return { exists: true, result: existingClan[0] };
  } else {
    return { exists: false };
  }
};
