// TambahData.js
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import './EditProduct.css';
import { Link } from 'react-router-dom';
import logo from "./../img/Logo.png";

function TambahData() {
  const [nama, setNama] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const history = useHistory();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!nama || !deskripsi || !keterangan) {
      alert("Data Gagal ditambahkan, field tidak boleh ada yang kosong");
    } else {
      try {
        await axios.post('http://localhost:8080/insert-data', {
          nama: nama,
          deskripsi: deskripsi,
          keterangan: keterangan,
        });

        alert("Data berhasil ditambahkan");
        // Redirect atau navigasi ke halaman 'user'
        history.push('/user');
      } catch (error) {
        console.error('Error adding product:', error);
        alert("Data Gagal ditambahkan, terjadi kesalahan");
      }
    }
  };

  const handleNavigateToUser = () => {
    // Navigasi ke halaman 'user'
    history.push('/user');
  };

  return (
    <div>
      <div className="navbar bg-base-100 h-20"></div>
      <div className="navbar bg-base-100 font-semibold z-50 w-full fixed top-0 shadow-lg">
        <div className="w-full navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content text-2xl mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a href="#">HALAMAN ADMIN</a>
              </li>
              <li>
                <a href="#">SMA'KU</a>
              </li>
              <li>
                <Link to="/create">CREATE</Link>
              </li>
              <li>
                <a href="#"></a>
              </li>
            </ul>
          </div>
          <Link to="/login" className="btn btn-ghost normal-case text-xl">
            <img src={logo} alt="LOGO" className="h-full" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:pr-4 lg:flex">
          <ul className="menu flex justify-end text-2xl menu-horizontal px-1">
            <li>
              <a href="#">HALAMAN ADMIN</a>
            </li>
            <li>
              <a href="#">SMA'KU</a>
            </li>
            <li>
              <Link to="/create">CREATE</Link>
            </li>
            <li>
              <a href="#"></a>
            </li>
          </ul>
        </div>
        <div className="navbar-end w-fit">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <a href="#" className="btn btn-primary">
              Landing
            </a>
          </Link>
        </div>
      </div>
      <div>
        <form className="App" onSubmit={handleFormSubmit}>
          <label className="table-caption">Form Input data</label>
          <div>
            <label className='label-input'>Nama:</label>
            <input
              type='text'
              className='input-form'
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder='Masukkan Nama SMA'
            />
          </div>
          <div>
            <label className='label-input'>Deskripsi:</label>
            <input
              type='text'
              className='input-form'
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
              placeholder='Masukkan Deskripsi SMA'
            />
          </div>
          <div>
            <label className='label-input'>Keterangan:</label>
            <input
              type='text'
              className='input-form'
              value={keterangan}
              onChange={(e) => setKeterangan(e.target.value)}
              placeholder='Masukkan Keterangan SMA'
            />
          </div>
          <div>
            <button type='submit'>Tambahkan</button>
          </div>
        </form>
        
        {/* Button untuk navigasi ke halaman 'user' */}
        <div>
          <button onClick={handleNavigateToUser}>Halaman User</button>
        </div>
      </div>
    </div>
  );
};

export default TambahData;