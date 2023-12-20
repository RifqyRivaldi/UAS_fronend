import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/Logo.png";
import "./../Aboutus/Aboutus.css";
import img4 from "../img/img4.png";

const AboutUs = () => {
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
            <Link to="Aboutus">About Us</Link>
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
          <Link to="Aboutus">About Us</Link>
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
    <img src={img4} alt="img4.png" className="image4"/>
    <div className="aboutus-container">
        <div className="aboutus-content">
          <h1 className="aboutus-title">Tentang Kami</h1>
          <p className="aboutus-description">
            Selamat datang di halaman Tentang Kami! Kami adalah tim yang berdedikasi untuk memberikan solusi terbaik kepada Anda.
          </p>
          <div className="aboutus-section">
            <h2 className="aboutus-section-title">Visi Kami</h2>
            <p className="aboutus-vision">
              Menjadi penyedia solusi terdepan dalam membantu Anda mencapai tujuan dan kesuksesan.
            </p>
          </div>

          <div className="aboutus-section">
            <h2 className="aboutus-section-title">Tim Kami</h2>
            <ul className="aboutus-team-list">
              <li className="aboutus-team-member">Rifqy Rivaldi TIE</li>
              <li className="aboutus-team-member">V3922040</li>
              {/* Add more team members as needed */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
