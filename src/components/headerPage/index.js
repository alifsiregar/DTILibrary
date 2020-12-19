/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Link } from 'react-router-dom';
import { isUserAuthenticated, deleteCookie } from '../../utils/cookie';

const HeaderPage = () => {
  const listMenu = ['katalog', 'pengembalian'];
  const logout = () => {
    deleteCookie('userData');
    deleteCookie('token');
    window.location.replace('/');
  };
  return (
    <nav className="bg-primary-dark">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                {listMenu.map((name) => {
                  return (
                    <Link to={`/${name}`} key={name}>
                      <div className="text-gray-300 hover:bg-primary hover:text-white px-3 py-2 rounded-md text-sm font-medium text-transform: uppercase">
                        {name}
                      </div>
                    </Link>
                  );
                })}
                {isUserAuthenticated() ? (
                  <div
                    className="text-transform: uppercase text-gray-300 hover:bg-white hover:text-primary px-3 py-2 rounded-md text-sm font-medium"
                    onClick={() => {
                      logout();
                    }}
                  >
                    Logout
                  </div>
                ) : (
                  <div />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderPage;
