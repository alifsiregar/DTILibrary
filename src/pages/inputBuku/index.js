/* eslint-disable max-len */
import React from 'react';
import Sidebar from '../../components/sidebar';

const inputBuku = () => {
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
                <label className="block text-xs mb-2" htmlFor="isbn">
                  ISBN
                  <input
                    type="text"
                    name="isbn"
                    id="isbn"
                    className="bg-gray-50 text-sm px-3 h-10 w-full border rounded-lg focus:outline-none focus:bg-white focus:border-primary"
                    autoComplete="off"
                  />
                </label>
              </div>
              <div className="mb-5">
                <label className="block text-xs mb-2" htmlFor="judul">
                  Judul
                  <input
                    type="text"
                    name="judul"
                    id="judul"
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
                    name="tahunTerbit"
                    id="tahunTerbit"
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
                    name="penulis"
                    id="penulis"
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
                    name="penerbit"
                    id="penerbit"
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
                    name="jmlHalaman"
                    id="jmlHalaman"
                    className="bg-gray-50 text-sm px-3 h-10 w-full border rounded-lg focus:outline-none focus:bg-white focus:border-primary"
                    autoComplete="off"
                  />
                </label>
              </div>
              <div className="mb-5">
                <label className="block text-xs mb-2" htmlFor="sinopsis">
                  Sinopsis
                  <textarea className="resize border rounded-md w-full h-40 bg-grey-50" />
                </label>
              </div>
              <div className="mb-5">
                <label className="block text-xs mb-2" htmlFor="kategori">
                  Kategori Buku
                  <select
                    type="text"
                    name="kategori"
                    id="kategori"
                    className="bg-gray-50 text-sm px-3 h-10 w-full border rounded-lg focus:outline-none focus:bg-white focus:border-primary"
                    autoComplete="off"
                  >
                    <option disabled selected>
                      Pilih Kategori
                    </option>
                    <option value="buku">Fantasi</option>
                    <option value="buku">Adventure</option>
                  </select>
                </label>
              </div>
              <div className="mb-5">
                <label className="block text-xs mb-2" htmlFor="stokTersedia">
                  Jumlah halaman
                  <input
                    type="text"
                    name="stokTersedia"
                    id="stokTersedia"
                    className="bg-gray-50 text-sm px-3 h-10 w-full border rounded-lg focus:outline-none focus:bg-white focus:border-primary"
                    autoComplete="off"
                  />
                </label>
              </div>
              <button
                type="submit"
                className="w-30  border border-blue-500 bg-blue-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-blue-300 focus:outline-none focus:shadow-outline"
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

export default inputBuku;
