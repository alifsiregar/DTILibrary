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
            style={{ backgroundColor: '#ECECDA' }}
            className=" m-3 p-3 rounded-lg text-center"
          >
            <span className=" text-xl">LOGIN</span>
          </div>
        </Link>
        <div />
        <div />
      </div>
      <div
        style={{ backgroundColor: '#ECECDA', width: '30rem' }}
        className=" h-72 pt-3 rounded-lg shadow-lg flex flex-col justify-between"
      >
        <div className="text-center ">
          <span className=" text-xl">
            <b>PURING</b>
            {' '}
            Registration
          </span>
        </div>
        <div className="pl-8 flex flex-col ">
          <div className="my-3">
            <span>Name: </span>
            <input className=" w-48" type="text" />
          </div>
          <div className="my-3">
            <span>Username:</span>
            <input className=" w-48" type="text" />
          </div>
          <div className="my-3">
            <span>Password: </span>
            <input type="password" className=" w-48" />
          </div>
        </div>
        <div className=" w-full h-16 flex items-center justify-center">
          <button
            type="button"
            style={{ backgroundColor: '#FF304F' }}
            className="p-2 rounded-lg"
          >
            <b>REGISTER</b>
          </button>
        </div>
      </div>
      <div
        style={{ backgroundColor: '#ECECDA', width: '35rem' }}
        className=" min-w-full pl-3"
      >
        <span className="">© FE-BE-02 Kelompok 03</span>
      </div>
    </div>
  );
}

export default UserRegistration;
