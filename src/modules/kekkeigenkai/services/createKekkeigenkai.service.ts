import { methods } from '../models/methods.model';

export const createKekkeigenkai = async (kekkeigenkai: string) => {
  const maxIdKekkeigenkai = await methods.findKekkeigenkaiByMaxId();
  const existingKekkeigenkai =
    await methods.findKekkeigenkaiByName(kekkeigenkai);
  if (existingKekkeigenkai[0].length > 0) {
    return { exists: true, record: existingKekkeigenkai[0] };
  } else {
    const id = maxIdKekkeigenkai[0][0]['maxId'] + 1;
    const result = await methods.insertKekkeigenkai(id, kekkeigenkai);
    return { exists: false, result };
  }
};
