import { z } from 'zod';

export const deleteClanSchema = z.object({
  id: z.number().nonnegative(),
});
