// routing.jsx

import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import Login from "../Login/login";
import Register from "../Registrasi/Register"; // Sesuaikan dengan path yang benar
import "../Dashboard/dashboard.css";
import Landing from "../Landing/landing"
import Pencarian from "../pencarian/pencarian";
import Google from "../google/google"
import User from "../user/user";
import EditProduct from "../edit/EditProduct";
import TambahData from "../create/create";
import Help from "../Help/help";
import Aboutus from "../Aboutus/Aboutus";

const Pages = () => {
  const handleFormSwitch = (formType) => {
    console.log(`Switching to ${formType}`);
    // Logika lainnya untuk mengganti formulir
  };

  return (
    <Router>
      <Switch>
        <Route path="/register">
          {/* Menggunakan komponen Register dan memberikan prop onFormSwitch */}
          <Register onFormSwitch={handleFormSwitch} />
        </Route>
        {/* Rute lainnya */}
        <Route exact path='/' component={Landing} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/dasboard' component={Dashboard} />
        <Route exact path='/pencarian' component={Pencarian} />
        <Route exact path='/Google' component={Google} />
        <Route exact path='/user' component={User} />
        <Route exact path='/edit-data/:id' component={EditProduct} />
        <Route exact path='/create' component={TambahData} />
        <Route exact path='/Help' component={Help} />
        <Route exact path='/Aboutus' component={Aboutus} />
      </Switch>
    </Router>
  );
}

export default Pages;
