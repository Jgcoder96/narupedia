import { z } from 'zod';

export const deleteKekkeigenkai = z.object({
  id: z.number().nonnegative(),
});
