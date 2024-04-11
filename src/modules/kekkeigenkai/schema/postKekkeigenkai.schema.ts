import { z } from 'zod';

export const postKekkeigenkai = z.object({
  kekkeigenkai: z.string().min(1, 'enter a valid kekkeigenkai'),
});
