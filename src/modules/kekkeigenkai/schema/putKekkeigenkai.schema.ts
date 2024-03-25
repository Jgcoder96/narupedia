import { z } from 'zod';

export const putKekkeigenkaiSchema = z.object({
  id: z.number().nonnegative(),
  kekkeigenkai: z.string().min(1, 'enter a valid kekkeigenkai'),
});
