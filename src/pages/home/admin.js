import React from 'react';
import { Link } from 'react-router-dom';
import { homeBg } from '../../assets';

function AdminLogin() {
  return (
    <div
      style={{ backgroundImage: `url(${homeBg})` }}
      className=" min-w-full min-h-screen flex flex-col items-center justify-between "
    >
      <div className=" w-full flex flex-row justify-between ">
        <div />
        <div />
        <Link to="/">
          <div
            style={{ backgroundColor: '#0E2F56' }}
            className=" m-3 p-3 rounded-lg text-center"
          >
            <span className="text-white font-bold text-xl">USER</span>
          </div>
        </Link>
      </div>
      <div
        style={{ backgroundColor: '#0E2F56', width: '20rem' }}
        className=" h-80 pt-3 rounded-lg shadow-lg flex flex-col justify-between"
      >
        <div className="text-center ">
          <span className="text-white text-xl">
            <b>PURING</b>
            <br />
            Admin Login
          </span>
        </div>
        <div className=" items-center flex flex-col ">
          <div className="my-3">
            <span className="text-white">Username:</span>
            <br />
            <input className=" w-48" type="text" />
          </div>
          <div className="my-3">
            <span className="text-white">Password: </span>
            <br />
            <input type="password" className=" w-48" />
          </div>
        </div>
        <div className=" w-full h-16 flex items-center justify-center">
          <button
            type="button"
            style={{ backgroundColor: '#FF304F' }}
            className="mr-6 text-white p-2 rounded-lg"
          >
            <b>LOGIN</b>
          </button>
        </div>
      </div>
      <div
        style={{ backgroundColor: '#0E2F56', width: '35rem' }}
        className=" min-w-full pl-3"
      >
        <span className="text-white">© FE-BE-02 Kelompok 03</span>
      </div>
    </div>
  );
}

export default AdminLogin;
