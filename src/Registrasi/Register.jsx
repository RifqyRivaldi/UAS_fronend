import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';
import logo from "./../img/img1.jpeg";
import img2 from "./../img/img2.png";
import "./App2.css";

const Register = () => {
  const history = useHistory(); // Mengganti useNavigate dengan useHistory
  const [Username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const backgroundStyle = {
    backgroundImage: `url(${logo})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    height: "100vh",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (Username && email && pass) {
      try {
        // Kirim data registrasi menggunakan axios
        const response = await axios.post('http://localhost:8080/insert-register', {
          nama: Username,
          username: Username,
          password: pass,
          email: email,
        });

        console.log(response.data);
        alert('Registration successful! You can now log in.');

        // Pindah ke halaman login setelah registrasi berhasil
        history.push("/login"); // Mengganti navigate dengan history.push
      } catch (error) {
        console.error('Error registering:', error);
        alert('Registration failed. Please try again.');
      }
    } else {
      alert('Registration failed. Please enter a valid username, email, and password.');
    }
  };

  return (
    <section className="login-form-container bg-danger" style={backgroundStyle}>
      <div className="login-left"></div>
      <div className="login-right">
        <div className="masuk-text">
          <img
            src={img2}
            alt="Image 2"
            className="login-image"
            style={{ width: "500px", height: "auto" }}
          />
          <h1>Daftar</h1>
          <form className="form-login" onSubmit={handleSubmit}>
            <p className="key">Username :</p>
            <div className="input-login">
              <div className="Username">
                <input
                  value={Username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  placeholder="Username"
                  id="Username"
                  name="Username"
                  className="login-input"
                />
              </div>
            </div>
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
            </div>
            <p className="key">Password :</p>
            <div className="input-login">
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
            </div>
            <div className="description_fpw">
              Sudah punya akun?{" "}
              <span className="blue-text">
                <Link to="/login">Masuk</Link>
              </span>
            </div>
            <br></br>
            <button type="submit" className="sign-in-button">Daftar</button>
            <br></br>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
