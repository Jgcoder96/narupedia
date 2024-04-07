import config from '../../../config/config';
import { models } from '../models/models';
import { utils } from '../utils/utils';
import { messages } from '../lib/messages';
import { Response } from '../types/response.type';

export const signIn = async (userName: string, receivedPassword: string) => {
  const response: Response = { procced: false };
  const existUser = await models.findUserByUsername(userName);

  if (existUser[0].length > 0) {
    const { password: userPassword, user_id: UserId } = existUser[0][0];
    const pass = await utils.comparePassword(receivedPassword, userPassword);

    if (pass) {
      let token;
      if (config.secret) {
        token = await utils.generateToken(UserId, config.secret);
        response.procced = true;
        response.message = messages.loginSuccessful;
        response.token = token;
      } else {
        response.message = messages.secretWordNotExist;
      }
    } else {
      response.message = messages.invalidPassword;
    }
  } else {
    response.message = messages.usernameNotFound;
  }

  return response;
};
