import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { bukuService } from '../../services';

const DetailBukuUser = ({ match }) => {
  const [detailBuku, setDetailBuku] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [isDataLoading, setDataLoading] = useState(false);

  useEffect(() => {
    setDataLoading(true);
    bukuService
      .getBukuNama(match.params.bukuNama)
      .then((res) => {
        setDetailBuku(res);
      })
      .finally(() => {
        setDataLoading(false);
      });
  }, [match.params.bukuNama]);
  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
            src={detailBuku.thumbnail}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">
              {detailBuku.penulis}
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
              {detailBuku.judul}
            </h1>
            <div className="flex mb-4">
              <span className="flex items-center">
                <span className="text-gray-600 ml-3">{`${detailBuku.jumlahHalaman} Halaman`}</span>
              </span>
            </div>
            <p className="leading-relaxed mb-4">{detailBuku.sinopsis}</p>
            <hr />
            <div className="flex mt-5">
              <span className="title-font font-medium text-2xl text-gray-900">{`Tersedia ${detailBuku.stokTersedia} Buku`}</span>
              <Link to={`/peminjaman/${detailBuku.judul}`}>
                <button
                  type="button"
                  className="flex ml-20 text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
                >
                  Pinjam
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailBukuUser;
