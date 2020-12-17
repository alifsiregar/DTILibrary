import React from 'react';
import { Link } from 'react-router-dom';
import { homeBg } from '../../assets';

function UserRegistration() {
  return (
    <div
      style={{ backgroundImage: `url(${homeBg})` }}
      className=" min-w-full min-h-screen flex flex-col items-center justify-between "
    >
      <div className=" w-full flex flex-row justify-between ">
        <Link to="/">
          <div
            style={{ backgroundColor: '#0E2F56' }}
            className=" m-3 p-3 rounded-lg text-center"
          >
            <span className=" text-white font-bold text-xl">LOGIN</span>
          </div>
        </Link>
        <div />
        <div />
      </div>
      <div
        style={{ backgroundColor: '#0E2F56', width: '30rem' }}
        className=" h-96 pt-3 rounded-lg shadow-lg flex flex-col justify-between"
      >
        <div className="text-white text-center ">
          <span className=" text-xl">
            <b>PURING</b>
            <br />
            User Registration
          </span>
        </div>
        <div className="items-center flex flex-col ">
          <div className="my-3">
            <span className="text-white">Name: </span>
            <br />
            <input className=" w-48" type="text" />
          </div>
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
            className="text-white p-2 rounded-lg"
          >
            <b>REGISTER</b>
          </button>
        </div>
      </div>
      <div
        style={{ backgroundColor: '#0E2F56', width: '35rem' }}
        className="text-white min-w-full pl-3"
      >
        <span className="">© FE-BE-02 Kelompok 03</span>
      </div>
    </div>
  );
}

export default UserRegistration;
