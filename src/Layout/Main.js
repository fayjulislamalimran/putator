import React from "react";
import Navbar from "../Shared/Navbar/Navbar.js";
import Footer from "../Shared/Footer/Footer.js";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
