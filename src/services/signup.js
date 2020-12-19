import BaseService from './baseService';
import API from '../config/rest';

const signup = (
  name,
  username,
  email,
  birthdate,
  gender,
  address,
  password
) => {
  return BaseService.post(API.SIGNUP, {
    name,
    username,
    email,
    birthdate,
    gender,
    address,
    password,
  });
};

export default { signup };
