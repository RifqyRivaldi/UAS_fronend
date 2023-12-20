import { Link } from "react-router-dom";
import React from "react";
import logo from "../img/Logo.png";
import ft5 from "./../img/5.jpeg";
import img4 from "./../img/img4.png";
import "../pencarian/pencarian.css";

const Pencarian = () => {
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  const contentData = [
    {
      title: "SMA 1 Mejayan membuka mahasiswa baru jalur prestasi",
      description:
        "Tentunya! SMA 1 Mejayan dengan penuh semangat dan komitmen terhadap pendidikan berkualitas serta pengembangan potensi maksimal, dengan ini mengumumkan peluncuran program jalur prestasi perluas yang revolusioner, yang dirancang khusus untuk memberikan peluang tak terbatas kepada mahasiswa baru dalam mengejar prestasi akademik, kemampuan, dan bakat yang luar biasa dalam lingkungan pendidikan yang inklusif dan berdaya saing tinggi.",
    },
    // Duplikat 1
    {
      title: "SMA 1 Mejayan membuka mahasiswa baru jalur prestasi",
      description:
        "Tentunya! SMA 1 Mejayan dengan penuh semangat dan komitmen terhadap pendidikan berkualitas serta pengembangan potensi maksimal, dengan ini mengumumkan peluncuran program jalur prestasi perluas yang revolusioner, yang dirancang khusus untuk memberikan peluang tak terbatas kepada mahasiswa baru dalam mengejar prestasi akademik, kemampuan, dan bakat yang luar biasa dalam lingkungan pendidikan yang inklusif dan berdaya saing tinggi.",
    },
    // Duplikat 2
    {
      title: "SMA 1 Mejayan membuka mahasiswa baru jalur prestasi",
      description:
        "Tentunya! SMA 1 Mejayan dengan penuh semangat dan komitmen terhadap pendidikan berkualitas serta pengembangan potensi maksimal, dengan ini mengumumkan peluncuran program jalur prestasi perluas yang revolusioner, yang dirancang khusus untuk memberikan peluang tak terbatas kepada mahasiswa baru dalam mengejar prestasi akademik, kemampuan, dan bakat yang luar biasa dalam lingkungan pendidikan yang inklusif dan berdaya saing tinggi.",
    },
    // Tambahkan data tambahan sesuai kebutuhan
    // {
    //   title: ...,
    //   description: ...,
    // },
  ];

  return (
    <navbar>
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
                <a href="#">Profil</a>
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
          <Link to="login" className="btn btn-ghost normal-case text-xl">
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
            <Link to="Aboutus">About us</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end w-fit">
          <Link to="login" className="btn btn-ghost normal-case text-xl">
            <a href="#" className="btn btn-primary">
              Sign In
            </a>
          </Link>
        </div>
      </div>
      <div className="min-h-screen w-full items-center gap-4 flex flex-col p-6">
        <navbar className="flex w-full md:w-1/2 justify-between rounded-lg bg-slate-200 items-center p-2 gap-2 shadow-sm">
          <input type="text" placeholder="Pencarian" className="bg-transparent w-full h-full p-2" />
          <img
            alt="[]"
            className="w-7"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAChklEQVR4nO2Zu24TQRSGPxeElgYbEVIYHoECCJdXQAIH+YKECA+AxEVESAl0wAsgUUEKpCiiIDFKDYGGS96AhhZSBZGQ2MFwpH+lKQxi8czYu+wnjbTy5f/3jPecOTOGgoKR5AAwDcwDa8A6sKPxBfig9y4DFUaQM0Ab6AC9vxz22WXgNCPAEWDFubku8Aq4BhwDysAeDbs+DlwHVvXZ5HsvgMPDCqIFfNWNfAPuAftTfN8Cuw9sSmMDaBCZOWc2F4DxAbQOAYuO3iyRuCvDH7ouedK9CuzGCqYlIzOsBdCfcoKpEzCxk5y4FcoEmHFyphrCYMXJiZCUnJxph1gneqowE4RnXJWwB5zyKdyWqJXYWFhpNs8ln21HRwtYmnViUGyd6aq9seuBuaKZeUl8Xsv7kg+xeYlZ2xGbG/J+7ENsTWLWO8VmUt7vfIitSyxmfiRU5P3Zh9i2xMaIz155f89LIBt5ebQ++kx22xTF5qS8rQznovw+8iE2LTHbnsbmjbzP+XpOkxbFS6uQskXpAPt8iS5rZqyRi8UDeVpL740TEt0aQht/1Ld425khX/v0fpj2M3k9D2FQ1cLU03Y0FLflYSeTB0OZNJzDBzso8M0F5/DhLIGZdYKZ8fSYlfRLJEHs6sSGWMEkOWOHbP/KhJMT7rDS2yQCdSdnNlWa06wzZZXYLacx7PYJpkEEqk41S4xX1VpMajEd06jotZvqndybXlBiN4cZDDqyWUr5t4JtD572aUZ/F0ydiJR1UPAEeK8Suq3F7RPwFniom/rTtqAxCsH4wsp7p08wF8lRMC0yyFSegqn9D8E0yWgwO0UwGSkAc2SU885jdoeMU4v5d3ZBwa8Z+Ak4rhMJLuUtjQAAAABJRU5ErkJggg=="
          />
        </navbar>
        <img src={img4} alt="img4.png" className="img4"/>

        {/* Your additional content */}
        {contentData.map((content, index) => (
          <div key={index} className="box">
            <div className="isi">
              <div className="overlap-group">
                <img src={ft5} alt="5.jpeg" className="image-left" />
                <div className="text-wrapper">
                  <h9>{content.title}</h9>
                  <p className="tentunya-SMA">{content.description}</p>
                </div>
              </div>
              <br />
              <hr className="underline" /> {/* Garis bawah */}
            </div>
          </div>
        ))}
      </div>
    <footer className="footer p-10 bg-secondary text-white">
    <div className="max-w-[10rem] mr-10">
      <p className="font-bold text-5xl">WiSchool</p>
      <p>We are not here to sell you products, we sell value through our expertise.</p>
      <div className="flex mt-9 gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50" style={{ fill: "#FFFFFF" }}>
          <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50" style={{ fill: "#FFFFFF" }}>
          <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50" style={{ fill: "#FFFFFF" }}>
          <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50" style={{ fill: "#FFFFFF" }}>
          <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 50 50" style={{ fill: "#FFFFFF" }}>
          <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
        </svg>
      </div>
    </div>
    <div className="flex flex-col items-center">
      <div className="font-bold text-2xl">Subscribe to get latest update</div>
      <div className="form-control">
        <div className="input-group">
          <input type="email" placeholder="Your Email Address..." className="input text-black input-bordered" />
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
  </navbar>
  );
};

export default Pencarian;
