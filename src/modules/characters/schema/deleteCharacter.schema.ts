import { z } from 'zod';

export const deleteCharacter = z.object({
  id: z.number().nonnegative(),
});
