import { z } from 'zod';

export const deleteVillage = z.object({
  id: z.number().nonnegative(),
});
