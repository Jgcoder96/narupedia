import { z } from 'zod';

export const putVillageSchema = z.object({
  id: z.number().nonnegative(),
  village: z.string().min(1, 'enter a valid village'),
});
