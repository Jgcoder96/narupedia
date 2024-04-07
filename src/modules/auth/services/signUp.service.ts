import config from '../../../config/config';
import { models } from '../models/models';
import { utils } from '../utils/utils';
import { Response } from '../types/response.type';
import { messages } from '../lib/messages';

export const signUp = async (
  username: string,
  email: string,
  password: string,
  rol: string,
) => {
  const response: Response = { procced: false };

  const existUsername = await models.findUserByUsername(username),
    existEmail = await models.findUserByEmail(email),
    existRol = await models.findRoleByName(rol);

  if (existUsername[0].length > 0) response.message = messages.usernameExist;
  else if (existEmail[0].length > 0) response.message = messages.emailExist;
  else if (existRol[0].length === 0) response.message = messages.rolNotFound;
  else {
    let token;

    if (config.secret) {
      const secret = config.secret;

      await models.insertUser(username, email, password);

      const user = await models.findUserByUsername(username);
      const rol = existRol[0][0].rol_id;
      const userId = user[0][0].user_id;

      await models.insertRolWithUser(rol, userId);

      token = await utils.generateToken(userId, secret);

      response.procced = true;
      response.message = messages.createUser;
      response.token = token;
    } else {
      response.message = messages.secretWordNotExist;
    }
  }
  return response;
};
