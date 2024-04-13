import { z } from 'zod';

export const deleteClan = z.object({
  id: z.number().nonnegative(),
});
