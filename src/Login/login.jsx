import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch, useHistory } from "react-router-dom";
import axios from 'axios'; // Import library Axios
import logo from "./../img/img1.jpeg";
import img2 from "./../img/img2.png";
import img3 from "./../img/img3.png";
import "./App.css";

export const Login = (props) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const history = useHistory(); // Gunakan useHistory untuk navigasi setelah login

  const handleSubmit = (e) => {
    e.preventDefault();

    // Lakukan permintaan ke backend untuk login
    axios.post('http://localhost:8080/login', {
      email: email,
      password: pass
    })
    .then(response => {
      const userData = response.data.values[0];
      console.log(userData);

      // Handle response sesuai kebutuhan
      if (response.data.code === 200) {
        alert('Login successful!');
        // Lakukan navigasi atau logika lainnya setelah login berhasil
        history.push('/dasboard'); // Ganti '/dashboard' dengan rute yang sesuai
      } else {
        alert('Login failed. Please check your username and password.');
      }
    })
    .catch(error => {
      console.error('Error logging in:', error);
      alert('Login failed. Please try again.');
    });
  };

  const backgroundStyle = {
    backgroundImage: `url(${logo})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    height: "100vh",
  };

  return (
    <section className="login-form-container bg-danger" style={backgroundStyle}>
      <div className="login-left"></div>
      <div className="login-right">
        <div className="masuk-text">
          <img src={img2} alt="Image 2" className="login-image" style={{ width: "400px", height: "auto" }} />
          <h1>Masuk</h1>
          <form className="form-login" onSubmit={handleSubmit}>
            <p className="key">Email :</p>
            <div className="input-login">
              <div className="email">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email"
                  id="email"
                  name="email"
                  className="login-input"
                />
              </div>
              <p className="key">Password :</p>
              <div className="password">
                <input
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  type="password"
                  placeholder="Password"
                  id="password"
                  name="password"
                  className="login-input"
                />
              </div>
              <div className="description_fpw">
                Belum punya akun? <Link to="/Register"><span className="blue-text">Daftar</span></Link>
              </div>
              <br></br>
              <button type="submit" className="sign-in-button">Sign In</button>
              <br></br>
              <br></br>
              <Link to="Google">
                <button type="submit" className="Google-button">
                  <img src={img3} alt="Image 3" className="google-icon" />
                  <span className="google-text">Masuk dengan Google</span>
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
