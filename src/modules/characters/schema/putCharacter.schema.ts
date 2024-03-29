import { z } from 'zod';

export const putCharacterSchema = z.object({
  id: z.number().nonnegative(),
  character: z.string().min(1, 'enter a valid name'),
  image: z.string().min(1, 'enter a valid image'),
});
