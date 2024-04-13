import { z } from 'zod';

export const putClan = z.object({
  id: z.number().nonnegative(),
  clan: z.string().min(1, 'enter a valid clan'),
});
