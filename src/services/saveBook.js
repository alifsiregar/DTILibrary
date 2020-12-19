import BaseService from './baseService';
import API from '../config/rest';

const saveBook = (
  listKategori,
  judul,
  tahun,
  penulis,
  penerbit,
  jumlahHalaman,
  sinopsis,
  thumbnail,
  stokTersedia
) => {
  return BaseService.post(API.BUKU, {
    listKategori,
    judul,
    tahun,
    penulis,
    penerbit,
    jumlahHalaman,
    sinopsis,
    thumbnail,
    stokTersedia,
  });
};

export default { saveBook };
