import { z } from 'zod';

export const postClan = z.object({
  clan: z.string().min(1, 'enter a valid clan'),
});
