import { z } from 'zod';

export const postVillage = z.object({
  village: z.string().min(1, 'enter a valid village'),
});
