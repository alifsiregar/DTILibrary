import BaseService from './baseService';
import API from '../config/rest';

const adminAuth = (username, password) => {
  return BaseService.post(API.ADMIN, { username, password });
};

export default { adminAuth };
