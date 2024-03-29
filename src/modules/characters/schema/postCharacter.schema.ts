import { z } from 'zod';

export const postCharacterSchema = z.object({
  character: z.string().min(1, 'enter a valid name'),
  image: z.string().min(1, 'enter a valid image'),
});
