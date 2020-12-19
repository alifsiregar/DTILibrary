/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { bukuService } from '../../services';
import { HeaderPage } from '../../components';

const KatalogBuku = () => {
  const [buku, setBuku] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  // let count = 0;
  useEffect(() => {
    const getBuku = () => {
      if (page < 1) {
        // eslint-disable-next-line no-alert
        alert('Halaman Awal');
        setIsLoading(false);
        setPage(1);
      }
      bukuService
        .getBuku(page)
        .then((res) => {
          setBuku(res);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };
    getBuku();
  }, [page]);
  return (
    <div className="-my-2 py-2 overflow-x-auto">
      <HeaderPage />
      <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12">
        <div className="flex justify-between">
          <div className="inline-flex border rounded w-7/12 px-2 lg:px-6 h-12 bg-transparent">
            <div className="flex flex-wrap items-stretch w-full h-full mb-6 relative">
              <div className="flex">
                <span className="flex items-center leading-normal bg-transparent rounded rounded-r-none border border-r-0 border-none lg:px-3 py-2 whitespace-no-wrap text-grey-dark text-sm">
                  <svg
                    width={18}
                    height={18}
                    className="w-4 lg:w-auto"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.11086 15.2217C12.0381 15.2217 15.2217 12.0381 15.2217 8.11086C15.2217 4.18364 12.0381 1 8.11086 1C4.18364 1 1 4.18364 1 8.11086C1 12.0381 4.18364 15.2217 8.11086 15.2217Z"
                      stroke="#455A64"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M16.9993 16.9993L13.1328 13.1328"
                      stroke="#455A64"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
              <input
                type="text"
                className="flex-shrink flex-grow leading-normal tracking-wide w-px flex-1 border border-none border-l-0 rounded rounded-l-none px-3 relative focus:outline-none text-xxs lg:text-base text-gray-500 font-thin"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
        <table className="min-w-full">
          <thead>
            <tr>
              {/* <th className="px-6 py-3 border-b-2 border-gray-300 text-left leading-4 text-blue-500 tracking-wider">
                No.
              </th> */}
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Nama Buku
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Penulis
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Penerbit
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Tahun
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Stok
              </th>
              <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                Detail Buku
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {isLoading ? (
              <tr>
                <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                  <div className="text-sm leading-5 text-blue-900">Loading</div>
                </td>
              </tr>
            ) : (
              buku.map((dataBuku) => {
                // eslint-disable-next-line no-return-assign
                return (
                  // eslint-disable-next-line no-underscore-dangle
                  <tr key={dataBuku._id}>
                    {/* <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    <div className="flex items-center">
                      <div>
                        <div className="text-sm leading-5 text-gray-800">{ count += 1 }</div>
                      </div>
                    </div>
                  </td> */}
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                      <div className="text-sm leading-5 text-blue-900">
                        {dataBuku.judul}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                      {dataBuku.penulis}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                      {dataBuku.penerbit}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                      {dataBuku.tahun}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-blue-900 text-sm leading-5">
                      {`${dataBuku.stokTersedia} Buku`}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500 text-sm leading-5">
                      <Link to={`/katalog/${dataBuku.judul}`}>
                        <button
                          type="button"
                          className="px-5 py-2 border-blue-500 border text-blue-500 rounded transition duration-300 hover:bg-primary hover:text-white focus:outline-none"
                        >
                          Detail Buku
                        </button>
                      </Link>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
          <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
              <nav
                className="relative z-0 inline-flex shadow-sm -space-x-px"
                aria-label="Pagination"
              >
                <button
                  onClick={() => {
                    setPage(page - 1);
                  }}
                  className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
                <button
                  onClick={() => {
                    setPage(page + 1);
                  }}
                  className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default KatalogBuku;
