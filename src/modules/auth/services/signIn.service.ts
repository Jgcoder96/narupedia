import config from '../../../config/config';
import { MODELS } from '../models/models';
import { UTILS } from '../utils/utils';
import { MESSAGES } from '../../../libs/messages.libs';
import { Response } from '../types/response.type';

export const signIn = async (userName: string, receivedPassword: string) => {
  const response: Response = { procced: false };
  const existUser = await MODELS.findUserByUsername(userName);

  if (existUser[0].length > 0) {
    const { password: userPassword, user_id: UserId } = existUser[0][0];
    const pass = await UTILS.comparePassword(receivedPassword, userPassword);

    if (pass) {
      let token;
      if (config.secret) {
        token = await UTILS.generateToken(UserId, config.secret);
        response.procced = true;
        response.message = MESSAGES.auth.loginSuccessful;
        response.token = token;
      } else {
        response.message = MESSAGES.server.secretWordNotExist;
      }
    } else {
      response.message = MESSAGES.auth.invalidPassword;
    }
  } else {
    response.message = MESSAGES.auth.usernameNotFound;
  }

  return response;
};
