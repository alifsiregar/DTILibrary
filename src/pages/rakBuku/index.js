import React from 'react';

import Sidebar from '../../components/sidebar';
import FormRakBuku from '../../components/formRakBuku';

function RakBuku() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">
        <div className="px-4">
          <section className="flex flex-col mt-10 pl-7">
            <h1 className="text-xl sm:text-4xl text-blue-1000 font-medium">
              Rak Buku
            </h1>
            <p className="text-sm sm:text-lg text-gray-600">
              Tambahkan buku baru
            </p>
          </section>
          <section>
            <FormRakBuku />
          </section>
        </div>
      </main>
    </div>
  );
}

export default RakBuku;
