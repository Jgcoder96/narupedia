import { z } from 'zod';

export const postKekkeigenkaiSchema = z.object({
  kekkeigenkai: z.string().min(1, 'enter a valid village'),
});
