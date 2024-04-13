import { z } from 'zod';

export const postCharacter = z.object({
  character: z.string().min(1, 'enter a valid name'),
});
