import React from 'react';

export { default as HeaderPage } from './headerPage';

export default function ViewRakButton() {
  return (
    <>
      <button
        to="/detail"
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
            // eslint-disable-next-line max-len
            d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
            clipRule="evenodd"
          />
        </svg>
        Detail
      </button>
    </>
  );
}
