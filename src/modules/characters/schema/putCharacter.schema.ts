import { z } from 'zod';

export const putCharacter = z.object({
  id: z.number().nonnegative(),
  character: z.string().min(1, 'enter a valid name'),
});
