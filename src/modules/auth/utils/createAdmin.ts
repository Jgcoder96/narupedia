import { UTILS } from './utils';
import { MODELS } from '../models/models';
import config from '../../../config/config';
import { getConnection } from '../../../database/script/connection/connection';

export const createAdmin = async (
  username: string,
  email: string,
  password: string,
): Promise<undefined> => {
  const existUsername = await MODELS.findUserByUsername(username);

  if (existUsername[0].length > 0) {
    throw new Error('administrator has already been created');
  }
  const passwordEncrypt = await UTILS.encryptPassword(password);
  await MODELS.insertUser(username, email, passwordEncrypt);
  const user = await MODELS.findUserByUsername(username),
    existRol = await MODELS.findRoleByName('ADMIN');

  const rol = existRol[0][0].rol_id;
  const userId = user[0][0].user_id;
  await MODELS.insertRolWithUser(rol, userId);
  const connection = await getConnection();
  connection.end();
  return;
};

export const insertAdmin = async () => {
  if (!config.adminDatabaseUsername) {
    throw new Error(
      'ADMIN_DATABASE_USERNAME: Does not exist in environment variables ',
    );
  } else if (!config.adminDatabasePassword) {
    throw new Error(
      'ADMIN_DATABASE_PASSWORD: Does not exist in environment variables ',
    );
  } else if (!config.adminDatabaseEmail) {
    throw new Error(
      'ADMIN_DATABASE_EMAIL: Does not exist in environment variables ',
    );
  }
  await createAdmin(
    config.adminDatabaseUsername,
    config.adminDatabaseEmail,
    config.adminDatabasePassword,
  );
  return;
};

insertAdmin();
