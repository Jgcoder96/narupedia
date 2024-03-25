import { z } from 'zod';

export const deleteKekkeigenkaiSchema = z.object({
  id: z.number().nonnegative(),
});
