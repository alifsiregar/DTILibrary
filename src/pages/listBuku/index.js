import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/sidebar';
import { ListBukuService } from '../../services';

const ListBuku = () => {
  const [listBuku, setListBuku] = useState([]);

  const getBuku = (buku) => {
    ListBukuService.ListBuku(buku).then((res) => {
      setListBuku(res);
    });
  };

  useEffect(() => {
    getBuku('');
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">
        <div className="px-4">
          <section className="flex justify-between mt-10 px-7">
            <div className="flex flex-col">
              <h1 className="text-xl sm:text-4xl text-blue-1000 font-medium">
                List Buku
              </h1>
            </div>
          </section>
          <section className="mx-7 my-4">
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
                    <th className="py-2 px-3 w-2/12 sticky top-0 border-b border-gray-200 bg-gray-100">
                      Judul
                    </th>
                    <th className="py-2 px-3 w-2/12 sticky top-0 border-b border-gray-200 bg-gray-100">
                      Tahun
                    </th>
                    <th className="py-2 px-3 w-2/12 sticky top-0 border-b border-gray-200 bg-gray-100">
                      Penulis
                    </th>
                    <th className="py-2 px-3 w-2/12 sticky top-0 border-b border-gray-200 bg-gray-100">
                      Penerbit
                    </th>
                    <th className="py-2 px-3 w-2/12 sticky top-0 border-b border-gray-200 bg-gray-100">
                      Jumlah Halaman
                    </th>
                    <th className="py-2 px-3 w-3/12 sticky top-0 border-b border-gray-200 bg-gray-100">
                      Sinopsis
                    </th>
                    <th className="py-2 px-3 w-2/12 sticky top-0 border-b border-gray-200 bg-gray-100">
                      Thumbnail
                    </th>
                    <th className="py-2 px-3 w-2/12 sticky top-0 border-b border-gray-200 bg-gray-100">
                      Stok Tersedia
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {listBuku.map((buku, index) => {
                    return (
                      <tr>
                        <td className="border-gray-200 text-left px-3 py-2 border-b">
                          {index + 1}
                        </td>
                        <td className="border-gray-200 text-left px-3 py-2 border-b">
                          {buku.judul}
                        </td>
                        <td className="border-gray-200 text-left px-3 py-2 border-b">
                          {buku.tahun}
                        </td>
                        <td className="border-gray-200 text-left px-3 py-2 border-b">
                          {buku.penulis}
                        </td>
                        <td className="border-gray-200 text-left px-3 py-2 border-b">
                          {buku.penerbit}
                        </td>
                        <td className="border-gray-200 text-left px-3 py-2 border-b">
                          {buku.jumlahHalaman}
                        </td>
                        <td className="border-gray-200 text-left px-3 py-2 border-b">
                          {buku.sinopsis}
                        </td>
                        <td className="border-gray-200 text-left px-3 py-2 border-b">
                          {buku.thumbnail}
                        </td>
                        <td className="border-gray-200 text-left px-3 py-2 border-b">
                          {buku.stokTersedia}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default ListBuku;
