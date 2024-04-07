import bcrypt from 'bcryptjs';

export const comparePassword = async (
  receivedPassword: string,
  password: string,
) => {
  const pass = await bcrypt.compare(receivedPassword, password);
  return pass;
};
