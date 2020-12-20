/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
import React, { useState } from 'react';
import Sidebar from '../../components/sidebar';
import { saveBookService } from '../../services';

const InputBuku = () => {
  let message = null;
  const [kategori, setKategori] = useState([]);
  const [judul, setJudul] = useState('');
  const [tahun, setTahun] = useState('');
  const [penulis, setPenulis] = useState('');
  const [penerbit, setPenerbit] = useState('');
  const [jumlahHalaman, setJumlahHalaman] = useState('');
  const [sinopsis, setSinopsis] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [stokTersedia, setStokTersedia] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  if (error != null) {
    message = (
      <div className=" mt-3 w-full h-16 flex items-center justify-center">
        <div className=" text-red-500">
          <span>{error}</span>
        </div>
      </div>
    );
  } else if (success != null) {
    // eslint-disable-next-line no-unused-vars
    message = (
      <div className=" mt-3 w-full h-16 flex items-center justify-center">
        <div className=" text-white">
          <span>{success}</span>
        </div>
      </div>
    );
  }
  const uploadBuku = () => {
    setError(null);
    saveBookService
      .saveBook(
        kategori,
        judul,
        tahun,
        penulis,
        penerbit,
        jumlahHalaman,
        sinopsis,
        thumbnail,
        stokTersedia
      )
      .then(() => {
        setSuccess('Data berhasil Disimpan');
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.error);
        }
      })
      .finally(() => {
        // setLoading(false);
      });
  };

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">
        <div className="px-4">
          <section className="flex flex-col pl-7">
            <form>
              <div className="text-xl sm:text-4xl text-blue-900 font-medium mb-10 mt-10">
                Input Buku
              </div>
              <div className="mb-5">
                <label className="block text-xs mb-2" htmlFor="judul">
                  Kategori
                  <input
                    type="text"
                    value={kategori}
                    onChange={(e) => {
                      setKategori([e.target.value]);
                    }}
                    className="bg-gray-50 px-3 h-10 w-full border rounded-lg focus:outline-none focus:bg-white focus:border-primary"
                    autoComplete="off"
                  />
                </label>
              </div>
              <div className="mb-5">
                <label className="block text-xs mb-2" htmlFor="judul">
                  Judul
                  <input
                    type="text"
                    value={judul}
                    onChange={(e) => {
                      setJudul(e.target.value);
                    }}
                    className="bg-gray-50 px-3 h-10 w-full border rounded-lg focus:outline-none focus:bg-white focus:border-primary"
                    autoComplete="off"
                  />
                </label>
              </div>
              <div className="mb-5">
                <label className="block text-xs mb-2" htmlFor="tahunTerbit">
                  Tahun Terbit
                  <input
                    type="text"
                    value={tahun}
                    onChange={(e) => {
                      setTahun(e.target.value);
                    }}
                    className="bg-gray-50 text-sm px-3 h-10 w-full border rounded-lg focus:outline-none focus:bg-white focus:border-primary"
                    autoComplete="off"
                  />
                </label>
              </div>
              <div className="mb-5">
                <label className="block text-xs mb-2" htmlFor="penulis">
                  Penulis
                  <input
                    type="text"
                    value={penulis}
                    onChange={(e) => {
                      setPenulis(e.target.value);
                    }}
                    className="bg-gray-50 text-sm px-3 h-10 w-full border rounded-lg focus:outline-none focus:bg-white focus:border-primary"
                    autoComplete="off"
                  />
                </label>
              </div>
              <div className="mb-5">
                <label className="block text-xs mb-2" htmlFor="penerbit">
                  Penerbit
                  <input
                    type="text"
                    value={penerbit}
                    onChange={(e) => {
                      setPenerbit(e.target.value);
                    }}
                    className="bg-gray-50 text-sm px-3 h-10 w-full border rounded-lg focus:outline-none focus:bg-white focus:border-primary"
                    autoComplete="off"
                  />
                </label>
              </div>
              <div className="mb-5">
                <label className="block text-xs mb-2" htmlFor="jmlHalaman">
                  Jumlah halaman
                  <input
                    type="text"
                    value={jumlahHalaman}
                    onChange={(e) => {
                      setJumlahHalaman(e.target.value);
                    }}
                    className="bg-gray-50 text-sm px-3 h-10 w-full border rounded-lg focus:outline-none focus:bg-white focus:border-primary"
                    autoComplete="off"
                  />
                </label>
              </div>
              <div className="mb-5">
                <label className="block text-xs mb-2" htmlFor="sinopsis">
                  Sinopsis
                  <textarea
                    className="resize border rounded-md w-full h-40 bg-grey-50"
                    value={sinopsis}
                    onChange={(e) => {
                      setSinopsis(e.target.value);
                    }}
                  />
                </label>
              </div>
              <div className="mb-5">
                <label className="block text-xs mb-2" htmlFor="thumbnail">
                  Thumbnail
                  <input
                    type="text"
                    value={thumbnail}
                    onChange={(e) => {
                      setThumbnail(e.target.value);
                    }}
                    className="bg-gray-50 text-sm px-3 h-10 w-full border rounded-lg focus:outline-none focus:bg-white focus:border-primary"
                    autoComplete="off"
                  />
                </label>
              </div>
              <div className="mb-5">
                <label className="block text-xs mb-2" htmlFor="stokTersedia">
                  Stok Tersedia
                  <input
                    type="text"
                    value={stokTersedia}
                    onChange={(e) => {
                      setStokTersedia(e.target.value);
                    }}
                    className="bg-gray-50 text-sm px-3 h-10 w-full border rounded-lg focus:outline-none focus:bg-white focus:border-primary"
                    autoComplete="off"
                  />
                </label>
              </div>
              <button
                type="button"
                className="w-30  border border-blue-500 bg-blue-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-300 focus:outline-none focus:shadow-outline mb-10"
                onClick={() => {
                  uploadBuku();
                }}
              >
                Save
              </button>
            </form>
          </section>
        </div>
      </main>
    </div>
  );
};

export default InputBuku;
