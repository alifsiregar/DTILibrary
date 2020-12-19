/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { kategoriServices } from '../../services/index';

export default function UpdateRakButton() {
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const submit = () => {
    kategoriServices.deleteKategori().then((res) => res);
  };

  return (
    <>
      <button
        onClick={onOpenModal}
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
            // eslint-disable-next-line max-len
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
        Delete
      </button>
      <Modal open={open} onClose={onCloseModal} center>
        <div className="h-1/2 bg-gray-50 pt-4 flex flex-col justify-center">
          <div className="max-w-xl w-full mx-auto">
            <div className="text-center font-medium text-md px-10">
              Apakah anda yakin ?
            </div>
            <div className="text-center font-semibold text-3xl text-red-500">
              Hapus Rak
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
              <button
                onClick={() => submit()}
                type="submit"
                className="bg-red-500 w-full text-white font-bold text-base px-4 py-2 rounded"
              >
                Delete
              </button>
            </form>
          </div>
        </div>
      </Modal>
    </>
  );
}
