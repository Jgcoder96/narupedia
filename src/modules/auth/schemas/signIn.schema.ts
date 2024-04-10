import { z } from 'zod';

export const signIn = z.object({
  username: z
    .string()
    .regex(/^[A-Za-z\d]{4,12}$/, { message: 'Invalid username' }),
  password: z
    .string()
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,15}$/,
      { message: 'Invalid password' },
    ),
});
