import React from "react";
import { Link } from "react-router-dom";
import logo from "../../src/img/img1.jpeg";
import img2 from "./../img/img2.png";
import ft3 from "./../img/3.jpeg";
import "./landing.css";

const Landing = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const backgroundStyle = {
    backgroundImage: `url(${logo})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    height: "100vh",
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
        <section className="login-form-container" style={backgroundStyle}>
          <div className="login-left"></div>
          <div className="login-right">
            <div className="masuk-text">
              <img
                src={img2}
                alt="Image 2"
                className="login-image"
                style={{ width: "500px", height: "auto" }}
              />
              <h1>SMA KU</h1>
              <p>Solusi Tepat</p>
              <p>Mencari SMA Favorit di Madiun</p>
              <form onSubmit={handleSubmit}>
                <Link to="login">
                  <br />
                  <button type="submit" className="sign-in-button">
                    Bergabung
                  </button>
                </Link>
                <Link to="create">
                  <br />
                  <button type="submit" className="sign-in-button">
                    Admin
                  </button>
                </Link>
              </form>
            </div>
          </div>
        </section>
        <div className="flex flex-col lg:gap-4 lg:flex-row mt-4 items-center lg:items-start">
          <div>
            <img
              className="w-44 lg:w-80 rounded-lg border-[1px] border-slate-300"
              src={ft3}
              alt="Siswa"
            />
          </div>
          <div className="flex flex-col gap-4 lg:justify-between lg:h-72 lg:items-start items-center lg:text-start text-center">
            <a className="font-bold text-3xl">
              Anda tidak perlu melihat keseluruhan tangga, cukup ambil langkah pertama
            </a>
            <p className="">Jangan Bingung Mencari SMA, semua ada SMA’KU</p>
            <div className="flex">
              <button className="btn normal-case text-white rounded bg-secondary">
                Get Started
              </button>
              <button className="btn normal-case mx-3 border-1 border-secondary rounded bg-blue-100">
                Place a call
              </button>
            </div>
          </div>
        </div>
        <footer className="footer p-10 bg-secondary text-white">
          <div className="max-w-[10rem] mr-10">
            <p className="font-bold text-5xl">WiSchool</p>
            <p>We are not here to sell you products, we sell value through our expertise.</p>
            <div className="flex mt-9 gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                style={{ fill: "#FFFFFF" }}
              >
                <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
              </svg>
              {/* Add other social icons here */}
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-bold text-2xl">Subscribe to get the latest update</div>
            <div className="form-control">
              <div className="input-group">
                <input
                  type="email"
                  placeholder="Your Email Address..."
                  className="input text-black input-bordered"
                />
                <button className="btn bg-primary text-white">Subscribe</button>
              </div>
            </div>
          </div>
          <div>
            <span className="footer-title">Services</span>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </div>
          <div>
            <span className="footer-title">Company</span>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </div>
          <div>
            <span className="footer-title">Legal</span>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </div>
        </footer>
      </div>
  );
};

export default Landing;
