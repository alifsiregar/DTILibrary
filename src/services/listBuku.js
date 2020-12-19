import BaseService from './baseService';
import API from '../config/rest';

const ListBuku = (buku) => {
  return BaseService.get(API.GETBUKU, {
    buku,
  });
};

export default { ListBuku };
