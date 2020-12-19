import BaseService from './baseService';
import API from '../config/rest';

const getBuku = (page) => {
  return BaseService.get(API.GETBUKUUSER, {
    params: {
      page,
    },
  });
};

const getBukuNama = (bukuNama) => {
  return BaseService.get(API.BUKUNAMA(bukuNama));
};

const getPinjam = () => {
  return BaseService.get(API.PINJAM);
};

export default { getBuku, getBukuNama, getPinjam };
