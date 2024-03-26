import { methods } from '../models/methods.model';

export const createClan = async (clan: string) => {
  const maxIdClan = await methods.findClanByMaxId();
  const existingClan = await methods.findClanByName(clan);
  if (existingClan[0].length > 0) {
    return { exists: true, record: existingClan[0] };
  } else {
    const id = maxIdClan[0][0]['maxId'] + 1;
    const result = await methods.insertClan(id, clan);
    return { exists: false, result };
  }
};
