import { z } from 'zod';

export const deleteCharacterSchema = z.object({
  id: z.number().nonnegative(),
});
