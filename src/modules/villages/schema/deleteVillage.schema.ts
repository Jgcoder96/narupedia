import { z } from 'zod';

export const deleteVillageSchema = z.object({
  id: z.number().nonnegative(),
});
