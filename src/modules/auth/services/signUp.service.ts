import config from '../../../config/config';
import { MODELS } from '../models/models';
import { UTILS } from '../utils/utils';
import { Response } from '../types/response.type';
import { MESSAGES } from '../../../libs/messages.libs';

export const signUp = async (
  username: string,
  email: string,
  password: string,
  rol: string,
) => {
  const response: Response = { procced: false };

  const existUsername = await MODELS.findUserByUsername(username),
    existEmail = await MODELS.findUserByEmail(email),
    existRol = await MODELS.findRoleByName(rol);

  if (existUsername[0].length > 0)
    response.message = MESSAGES.auth.usernameExist;
  else if (existEmail[0].length > 0)
    response.message = MESSAGES.auth.emailExist;
  else if (existRol[0].length === 0)
    response.message = MESSAGES.auth.rolNotFound;
  else {
    let token;

    if (config.secret) {
      const secret = config.secret;

      await MODELS.insertUser(username, email, password);

      const user = await MODELS.findUserByUsername(username);
      const rol = existRol[0][0].rol_id;
      const userId = user[0][0].user_id;

      await MODELS.insertRolWithUser(rol, userId);

      token = await UTILS.generateToken(userId, secret);

      response.procced = true;
      response.message = MESSAGES.auth.createUser;
      response.token = token;
    } else {
      response.message = MESSAGES.server.secretWordNotExist;
    }
  }
  return response;
};
