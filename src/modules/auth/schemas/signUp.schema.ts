import { z } from 'zod';

const regexPassword = new RegExp(
  '^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]{8,15}$',
);

const regexUsername = new RegExp('^[A-Za-zd]{4,12}$');

export const signUp = z.object({
  username: z.string().regex(regexUsername, { message: 'Invalid username' }),
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().regex(regexPassword, { message: 'Invalid password' }),
});
