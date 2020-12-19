import BaseService from './baseService';
import API from '../config/rest';

const signup = (
  name,
  username,
  email,
  birthdate,
  gender,
  phone,
  address,
  // eslint-disable-next-line camelcase
  raw_password,
  password
) => {
  return BaseService.post(API.SIGNUP, {
    name,
    username,
    email,
    birthdate,
    gender,
    phone,
    address,
    raw_password,
    password,
  });
};

export default { signup };
