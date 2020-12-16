/* eslint-disable max-len */
import React from 'react';

import { Link } from 'react-router-dom';

import { deleteCookie } from '../../utils/cookie';

import { ReactComponent as DefaultUser } from '../../assets/images/default-avatar.svg';

function Sidebar(match) {
  const navLinkActive = (path) => {
    console.log('hai');
    return match.path === path ? 'active bg-blue-500' : 'text-white';
  };

  const logout = () => {
    deleteCookie('userData');
    deleteCookie('token');
    window.location.replace('/');
  };

  return (
    <aside
      className=" bg-blue-1000 max-h-screen h-screen overflow-y-auto"
      style={{ width: 280 }}
    >
      <div
        className="max-h-screen h-screen fixed bg-blue-1000 flex flex-col content-between z-50"
        style={{ width: 280 }}
      >
        <div className="flex flex-col text-center mt-8">
          <div className="border border-teal-1000 rounded-full mx-auto p-2 inline-flex  mb-3">
            <div className="rounded-full">
              <DefaultUser className="fill-green-700 w-24 h-24" />
            </div>
          </div>
          <h5 className="text-xl font-semibold text-white">Username</h5>
          <p className="text-base font-light italic text-gray-400">Role</p>
          <ul className="main-menu mt-12">
            <li>
              <Link
                className={[
                  'nav-link relative flex items-center hover:bg-red-500 py-3 px-5 transition-all duration-200 hover:text-white active focus:outline-none w-full text-left',
                  navLinkActive('/perpustakaan'),
                ].join(' ')}
                to="/perpustakaan"
              >
                <svg
                  className="h-5 w-5 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Perpustakaan
              </Link>
            </li>
            <li>
              <Link
                className={[
                  'nav-link relative flex items-center hover:bg-red-500 py-3 px-5 transition-all duration-200 hover:text-white focus:outline-none w-full text-left',
                  navLinkActive('/rakbuku'),
                ].join(' ')}
                to="/rakbuku"
              >
                <svg
                  className="h-5 w-5 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
                  <path
                    fillRule="evenodd"
                    d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Rak buku
              </Link>
            </li>
            <li>
              <Link
                className={[
                  'nav-link relative flex items-center hover:bg-red-500 py-3 px-5 transition-all duration-200 hover:text-white focus:outline-none w-full text-left',
                  navLinkActive('/detailbuku'),
                ].join(' ')}
                to="/detailbuku"
              >
                <svg
                  className="h-5 w-5 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
                    clipRule="evenodd"
                  />
                </svg>
                Detail Buku
              </Link>
            </li>
            <li>
              <Link
                className={[
                  'nav-link relative flex items-center bg hover:bg-red-500 py-3 px-5 transition-all duration-200 hover:text-white focus:outline-none w-full text-left',
                  navLinkActive('/pengaturan'),
                ].join(' ')}
                to="/pengaturan"
              >
                <svg
                  className="h-5 w-5 mr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
                </svg>
                Pengaturan
              </Link>
            </li>
          </ul>
        </div>
        <div className="my-auto" />

        <ul className="mt-28">
          <li>
            <button
              type="submit"
              onClick={() => {
                logout();
              }}
              className="nav-link relative font-semibold text-red-500 flex items-center py-3 px-5 transition-all duration-200 hover:text-white hover:bg-red-600 focus:outline-none w-full text-left"
            >
              Keluar
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
