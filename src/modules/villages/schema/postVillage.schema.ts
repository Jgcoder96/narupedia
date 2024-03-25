import { z } from 'zod';

export const postVillageSchema = z.object({
  village: z.string().min(1, 'enter a valid village'),
});
