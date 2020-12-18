/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable arrow-body-style */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { kategoriServices } from '../../services/index';

import CreateRakButton from '../createRakButton';
import UpdateRakButton from '../updateRakButton';
// import ViewRakButton from '../viewRakButton';

function formRakBuku() {
  const [listKategori, setListKategori] = useState([]);
  const [cari, setCari] = useState('');

  const getKategoris = (namaKategori) => {
    kategoriServices.getKategori(namaKategori).then((res) => {
      setListKategori(res);
    });
  };

  useEffect(() => {
    getKategoris('');
  }, []);
  return (
    <>
      <section className="mx-7 my-4">
        <div className="flex justify-between mb-2">
          <CreateRakButton />
          <input
            type="search"
            className="bg-white shadow-sm outline-none border rounded px-3 w-52 h-10"
            placeholder="Search"
            onSubmit={(e) => {
              e.preventDefault();
              getKategoris(cari);
            }}
            onChange={(e) => {
              setCari(e.target.value);
            }}
          />
        </div>
        <div
          className="overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative"
          style={{ height: 460 }}
        >
          <table className="border-collapse table-auto w-full bg-white absolute">
            <thead>
              <tr className="text-left">
                <th className="py-2 px-3 w-1/12 sticky top-0 border-b border-gray-200 bg-gray-100">
                  No.
                </th>
                <th className="py-2 px-3 w-3/12 sticky top-0 border-b border-gray-200 bg-gray-100">
                  Nama Rak Buku
                </th>
                <th className="py-2 px-3 w-4/12 sticky top-0 border-b border-gray-200 bg-gray-100">
                  Deskripisi
                </th>
                <th className="py-2 px-3 w-3/12 sticky top-0 border-b border-gray-200 bg-gray-100">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {listKategori.map((rak, index) => {
                return (
                  <tr>
                    <td className="border-gray-200 text-left px-3 py-2 border-b">
                      {index + 1}
                    </td>
                    <td className="border-gray-200 text-left px-3 py-2 border-b">
                      {rak.nama}
                    </td>
                    <td className="border-gray-200 text-left px-3 py-2 border-b">
                      {rak.deskripsi}
                    </td>
                    <td className="border-gray-200 text-left px-3 py-2 border-b">
                      <div className="flex text-center justify-items-center">
                        <Link
                          target="_blank"
                          rel="noopener noreferer"
                          to={`/detailrak/${rak.nama}`}
                          type="button"
                          className=" bg-gray-500 text-white flex rounded mr-2 pl-1 pr-2 py-1"
                        >
                          <svg
                            className="w-5 h-5 mr-1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="#fff"
                          >
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path
                              fillRule="evenodd"
                              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Detail
                        </Link>
                        <UpdateRakButton />
                        <button
                          type="button"
                          className="bg-red-500 text-white flex rounded pl-1 pr-2 py-1"
                        >
                          <svg
                            className="w-5 h-5 mr-1"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="#fff"
                          >
                            <path
                              fillRule="evenodd"
                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
}

export default formRakBuku;
