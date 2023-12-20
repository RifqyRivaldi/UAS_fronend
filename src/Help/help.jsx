import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/Logo.png";
import "./../Help/help.css";

const Help = () => {
  return (
    <>
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
                <a href="">Profil</a>
              </li>
              <li>
              <Link to="dasboard">Dashboard</Link>
              </li>
              <li>
                <Link to="Help">Help</Link>
              </li>
              <li>
              <Link to="Aboutus">About us</Link>
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
              <a href="#">Profil</a>
            </li>
            <li>
            <Link to="dasboard">Dashboard</Link>
            </li>
            <li>
              <Link to="Help">Help</Link>
            </li>
            <li>
            <Link to="/Aboutus">About us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end w-fit">
          <Link to="/login" className="btn btn-ghost normal-case text-xl">
            <a href="#" className="btn btn-primary">
              Sign In
            </a>
          </Link>
        </div>
      </div>
      <div className="help-container">
        <div className="help-content">
          <h1 className="help-title">Pusat Bantuan</h1>
          <p className="help-description">
            Selamat datang di Pusat Bantuan kami! Jika Anda memiliki pertanyaan atau masalah, silakan jelajahi sumber daya di bawah ini atau hubungi tim dukungan kami.
          </p>
  
          <div className="help-section">
            <h2 className="help-section-title">Frequently Asked Questions (FAQs)</h2>
            <ul className="help-list">
              <li className="help-item">Bagaimana cara membuat akun?</li>
              <li className="help-item">Bagaimana memasukkan halaman?</li>
              <li className="help-item">Bagaimana cara mengatur ulang kata sandi saya?</li>
            </ul>
          </div>
  
          <div className="help-section">
            <h2 className="help-section-title">Hubungi</h2>
            <p className="help-contact">
            Jika Anda tidak dapat menemukan jawaban yang Anda cari, jangan ragu untuk <a href="mailto:support@example.com">Hubungi tim dukungan kami</a>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Help;
