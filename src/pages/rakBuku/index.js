import React from 'react';

import Sidebar from '../../components/sidebar';
import FormRakBuku from '../../components/formRakBuku';

function RakBuku() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1">
        <div className="px-4">
          <section className="flex justify-between mt-10 px-7">
            <div className="flex flex-col">
              <h1 className="text-xl sm:text-4xl text-blue-1000 font-medium">
                Rak Buku
              </h1>
              <p className="text-sm sm:text-lg text-gray-600">
                Tambahkan buku baru
              </p>
            </div>
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
