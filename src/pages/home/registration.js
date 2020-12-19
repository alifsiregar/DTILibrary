import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { homeBg } from '../../assets';
import { signupService } from '../../services';
import { getCookie, setCookie } from '../../utils/cookie';

function UserRegistration() {
  const history = useHistory();
  let message = null;
  const [locationToken, setLocationToken] = useState('');
  const [listProvinsi, setListProvinsi] = useState(null);
  const [listKota, setListKota] = useState(null);
  const [provinsiID, setProvinsiID] = useState('11');
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [gender, setGender] = useState('Pria');
  const [alamat, setAlamat] = useState({});
  const [provinsi, setProvinsi] = useState(null);
  const [kota, setKota] = useState('');
  const [jalan, setJalan] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  useEffect(() => {
    if (getCookie('locationToken')) {
      setLocationToken(JSON.parse(getCookie('locationToken')));
    } else {
      fetch('https://x.rajaapi.com/poe')
        .then((res) => {
          return res.json();
        })
        .then((result) => {
          const { token } = result;
          setCookie('locationToken', JSON.stringify(token), 10000);
          setLocationToken(token);
        });
    }
  }, []);
  useEffect(() => {
    if (locationToken !== '') {
      fetch(`https://x.rajaapi.com/MeP7c5ne${locationToken}/m/wilayah/provinsi`)
        .then((res) => {
          return res.json();
        })
        .then((result) => {
          setListProvinsi(result.data);
        });
    }
  }, [locationToken]);
  useEffect(() => {
    if (
      provinsiID !== null &&
      provinsiID !== [] &&
      provinsiID !== undefined &&
      locationToken !== ''
    ) {
      fetch(
        `https://x.rajaapi.com/MeP7c5ne${locationToken}/m/wilayah/kabupaten?idpropinsi=${provinsiID}`
      )
        .then((res) => {
          return res.json();
        })
        .then((result) => {
          setListKota(result.data);
        });
    }
  }, [provinsiID, locationToken]);
  useEffect(() => {
    setAlamat({
      province: provinsi,
      city: kota,
      street: jalan,
    });
  }, [provinsi, kota, jalan]);
  if (error != null) {
    message = (
      <div className=" mt-3 w-full h-16 flex items-center justify-center">
        <div className=" text-red-500">
          <span>{error}</span>
        </div>
      </div>
    );
  } else if (success != null) {
    message = (
      <div className=" mt-3 w-full h-16 flex items-center justify-center">
        <div className=" text-white">
          <span>{success}</span>
        </div>
      </div>
    );
  }
  const sendData = () => {
    setError(null);
    setLoading(true);
    signupService
      .signup(name, username, email, date, gender, alamat, password)
      .then(() => {
        setSuccess('Registration success, redirecting you to login');
        setTimeout(() => {
          history.push('/');
        }, 3000);
      })
      .catch((err) => {
        if (err.response) {
          setError(err.response.data.error);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };
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
        className=" overflow-y-scroll h-96 pt-3 rounded-lg shadow-lg flex flex-col justify-between"
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
            <span className="text-white">Nama: </span>
            <br />
            <input
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className=" w-48"
              type="text"
            />
          </div>
          <div className="my-3">
            <span className="text-white">Username:</span>
            <br />
            <input
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              className=" w-48"
              type="text"
            />
          </div>
          <div className="my-3">
            <span className="text-white">Email:</span>
            <br />
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className=" w-48"
              type="text"
            />
          </div>
          <div className="my-3">
            <span className="text-white">Tanggal Lahir:</span>
            <br />
            <input
              value={date}
              onChange={(e) => {
                setDate(e.target.value);
              }}
              className=" w-48"
              type="date"
            />
          </div>
          <div className="my-3">
            <span className="text-white">Jenis Kelamin:</span>
            <br />
            <select
              value={gender}
              onChange={(e) => {
                setGender(e.target.value);
              }}
              className="w-48"
            >
              <option value="Pria">Pria</option>
              <option value="Wanita">Wanita</option>
            </select>
          </div>
          <div className="my-3">
            <span className="text-white">Provinsi:</span>
            <br />
            {listProvinsi == null ? (
              ''
            ) : (
              <select
                className="w-48"
                value={`${provinsi}-${provinsiID}`}
                onChange={(e) => {
                  setProvinsi(e.target.value.split('-')[0]);
                  setProvinsiID(e.target.value.split('-')[1]);
                }}
              >
                {listProvinsi.map((item) => {
                  return (
                    <option key={item.id} value={`${item.name}-${item.id}`}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            )}
          </div>
          <div className="my-3">
            <span className="text-white">Kota:</span>
            <br />
            {listKota == null ? (
              ''
            ) : (
              <select
                className="w-48"
                value={kota}
                onChange={(e) => {
                  setKota(e.target.value);
                }}
              >
                {listKota.map((item) => {
                  return (
                    <option key={item.id} value={`${item.name}`}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            )}
          </div>
          <div className="my-3">
            <span className="text-white">Jalan:</span>
            <br />
            <input
              value={jalan}
              onChange={(e) => {
                setJalan(e.target.value);
              }}
              className=" w-48"
              type="text"
            />
          </div>
          <div className="my-3">
            <span className="text-white">Password: </span>
            <br />
            <input
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              className=" w-48"
            />
          </div>
        </div>
        {message}
        {loading ? (
          <div className=" mt-3 w-full h-16 flex items-center justify-center">
            <div className="text-white">
              <span>
                <b>LOADING...</b>
              </span>
            </div>
          </div>
        ) : (
          <div className=" mt-3 w-full h-16 flex items-center justify-center">
            <button
              onClick={() => {
                sendData();
              }}
              type="button"
              style={{ backgroundColor: '#FF304F' }}
              className="text-white p-2 rounded-lg"
            >
              <b>REGISTER</b>
            </button>
          </div>
        )}
        <div>
          <span style={{ color: '#0E2F56' }}>.</span>
        </div>
        <div />
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
