import { z } from 'zod';

export const postClanSchema = z.object({
  clan: z.string().min(1, 'enter a valid clan'),
});
