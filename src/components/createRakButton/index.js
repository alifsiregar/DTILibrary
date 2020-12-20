/* eslint-disable no-unused-vars */

/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { kategoriServices } from '../../services/index';

export default function CreateRakButton() {
  const [open, setOpen] = useState(false);
  const [nama, setNama] = useState('');
  const [deskripsi, setDeskripsi] = useState('');

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const submit = () => {
    kategoriServices.postKategori(nama, deskripsi).then((res) => res);
  };
  return (
    <>
      <button
        onClick={onOpenModal}
        className="flex bg-blue-1000 text-white rounded mt-2 px-2 mr-2 pl-1 pr-2 py-1"
        type="button"
      >
        <svg
          className="w-7 h-7 mr-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="#fff"
        >
          <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" />
          <path
            stroke="#0e2f56"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 11h4m-2-2v4"
          />
        </svg>
        Tambah Rak
      </button>
      <Modal open={open} onClose={onCloseModal} center>
        <div className="h-1/2 bg-gray-50 pt-4 flex flex-col justify-center">
          <div className="max-w-xl w-full mx-auto">
            <div className="text-center font-medium text-md px-10">
              Silahkan mengisi form
            </div>
            <div className="text-center font-semibold text-3xl text-blue-1000">
              Tambahkan Rak
            </div>
          </div>
          <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border border-gray-300">
            <form
              action=""
              onSubmit={(e) => {
                e.preventDefault();
                submit();
              }}
              className="space-y-6"
            >
              <div>
                <label
                  htmlFor=""
                  className="text-sm font-bold text-gray-600 block"
                >
                  Nama Rak
                </label>
                <input
                  value={nama}
                  onChange={(e) => {
                    setNama(e.target.value);
                  }}
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded mt-1"
                />
              </div>
              <div>
                <label
                  htmlFor=""
                  className="text-sm font-bold text-gray-600 block"
                >
                  Deskrpisi
                </label>
                <input
                  value={deskripsi}
                  onChange={(e) => {
                    setDeskripsi(e.target.value);
                  }}
                  type="text"
                  className="w-full border p-2 border-gray-300 rounded mt-1"
                />
              </div>
              <button
                onClick={() => submit()}
                type="submit"
                className="bg-blue-1000 w-full text-white font-bold text-base px-4 py-2 rounded"
              >
                Tambah
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}
