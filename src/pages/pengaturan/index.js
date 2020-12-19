import React from 'react';

import Sidebar from '../../components/sidebar';

function Pengaturan() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex h-screen mx-auto items-center text-center">
        <h2 className="text-blue-1000 font-semibold text-5xl">Pengaturan</h2>
      </div>
    </div>
  );
}

export default Pengaturan;
