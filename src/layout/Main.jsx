import React from "react";
import Header from "../pages/SharedPage/Header";
import { Outlet } from "react-router-dom";
import Footer from "../pages/SharedPage/Footer";

const Main = () => {
  return (
    <div className="">
      <Header></Header>
      <div className='min-h-[calc(100vh-366px)] max-w-screen-xl mx-auto lg:px-16'>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
