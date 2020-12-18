import BaseService from './baseService';
import API from '../config/rest';

const getKategori = (namaKategori) => {
  return BaseService.get(API.CATEGORY, { namaKategori });
};

const getKategoriNama = (nama, deskripsi) => {
  return BaseService.get(API.CATEGORYBYNAME, { nama, deskripsi });
};

const postKategori = (nama, deskripsi) => {
  return BaseService.post(API.CREATECATEGORY, { nama, deskripsi });
};

const updateKategori = (nama, deskripsi) => {
  return BaseService.put(API.UPDATECATEGORY, { nama, deskripsi });
};

const deleteKategori = (_id) => {
  return BaseService.delete(API.DELETECATEGORY, { _id });
};

export default {
  getKategori,
  postKategori,
  getKategoriNama,
  updateKategori,
  deleteKategori,
};
