/* eslint-disable no-unused-vars */
import React from 'react';
import { HeaderPage } from '../../components';

const PeminjamanBuku = ({ match }) => {
  return (
    <div>
      <HeaderPage />
      <div className="container my-5 py-2 overflow-x-auto mx-60">
        <div className="flex">
          <div className="w-1/2">
            <div className="align-middle rounded-tl-lg rounded-tr-lg py-4 bg-white shadow-lg px-12">
              <form>
                <div className="text-xl font-semibold mb-3 uppercase">
                  Input data Peminjaman
                </div>
                <div className="mb-5">
                  <label
                    className="block uppercase text-xs mb-2"
                    htmlFor="name"
                  >
                    Nama
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    /* eslint-disable-next-line max-len */
                    className="bg-gray-50 px-3 h-10 w-full border rounded-lg focus:outline-none focus:bg-white focus:border-primary"
                    autoComplete="off"
                  />
                </div>
                <div className="mb-5">
                  <label
                    className="block uppercase text-xs mb-2"
                    htmlFor="tglPinjam"
                  >
                    Tgl. Pinjam
                  </label>
                  <input
                    type="date"
                    name="name"
                    id="tglPinjam"
                    /* eslint-disable-next-line max-len */
                    className="bg-gray-50 text-sm px-3 h-10 w-full border rounded-lg focus:outline-none focus:bg-white focus:border-primary"
                    autoComplete="off"
                  />
                </div>
                <div className="mb-5">
                  <label
                    className="block uppercase text-xs mb-2"
                    htmlFor="keterangan"
                  >
                    Keterangan
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="keterangan"
                    /* eslint-disable-next-line max-len */
                    className="bg-gray-50 text-sm px-3 h-10 w-full border rounded-lg focus:outline-none focus:bg-white focus:border-primary"
                    autoComplete="off"
                  />
                </div>
                <div className="mb-5">
                  <label
                    className="block uppercase text-xs mb-2"
                    htmlFor="tglKembali"
                  >
                    Lama Pinjam
                  </label>
                  <input
                    type="number"
                    name="name"
                    id="tglKembali"
                    /* eslint-disable-next-line max-len */
                    className="bg-gray-50 text-sm px-3 h-10 w-full border rounded-lg focus:outline-none focus:bg-white focus:border-primary"
                    autoComplete="off"
                  />
                </div>
                <div className="text-xl font-semibold mb-3 uppercase">
                  Data Buku
                </div>
                <div className="mb-5">
                  <label
                    className="block uppercase text-xs mb-2"
                    htmlFor="kode"
                  >
                    Judul Buku
                  </label>
                  <input
                    type="text"
                    disabled
                    value={match.params.bukuNama}
                    name="name"
                    id="kode"
                    /* eslint-disable-next-line max-len */
                    className="bg-gray-50 text-sm px-3 h-10 w-full border rounded-lg focus:outline-none focus:bg-white focus:border-primary"
                    autoComplete="off"
                  />
                </div>
                <button
                  type="submit"
                  /* eslint-disable-next-line max-len */
                  className="px-4 py-2 border-2 border-primary bg-primary text-white hover:bg-white hover:text-primary  hover:border-primary rounded-lg transition duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeminjamanBuku;
