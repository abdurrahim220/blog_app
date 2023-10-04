import React from "react";
import NavBar from "../component/NavBar/NavBar";
import Home from "../component/Home/Home";
import Footer from "../component/Footer/Footer";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
