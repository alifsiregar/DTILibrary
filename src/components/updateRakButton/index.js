/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { kategoriServices } from '../../services/index';

export default function UpdateRakButton() {
  const [open, setOpen] = useState(false);
  const [nama, setNama] = useState('');
  const [deskripsi, setDeskripsi] = useState('');

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const submit = () => {
    kategoriServices.updateKategori(nama, deskripsi).then((res) => res);
  };

  return (
    <>
      <button
        onClick={onOpenModal}
        type="button"
        className=" bg-green-500 text-white flex rounded mr-2 pl-1 pr-2 py-1"
      >
        <svg
          className="w-5 h-5 mr-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="#fff"
        >
          <path d="M8 2a1 1 0 000 2h2a1 1 0 100-2H8z" />
          <path d="M3 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v6h-4.586l1.293-1.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L10.414 13H15v3a2 2 0 01-2 2H5a2 2 0 01-2-2V5zM15 11h2a1 1 0 110 2h-2v-2z" />
        </svg>
        Update
      </button>
      <Modal open={open} onClose={onCloseModal} center>
        <div className="h-1/2 bg-gray-50 pt-4 flex flex-col justify-center">
          <div className="max-w-xl w-full mx-auto">
            <div className="text-center font-medium text-md px-10">
              Silahkan mengisi form
            </div>
            <div className="text-center font-semibold text-3xl text-green-500">
              Update Rak
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
                className="bg-green-500 w-full text-white font-bold text-base px-4 py-2 rounded"
              >
                Update
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}
