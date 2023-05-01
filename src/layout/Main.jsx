import React from 'react';
import Header from '../pages/SharedPage/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/SharedPage/Footer';

const Main = () => {
    return (
        <div className='max-w-screen-xl mx-auto px-12'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;