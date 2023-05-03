import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import errorImg from '../../assets/errorImg.jpg'

const ErrorPage = () => {

    const error = useRouteError();
    return (
        <div className='mx-auto max-w-screen-xl mt-24 text-center  '>
            <img className='mx-auto ' src={errorImg} alt="" />
            <h1 className='text-center text-2xl text-orange-600'>{error.error.message}</h1>
            <Link to='/'><button className='bg-orange-600 mx-auto mt-12 px-6 py-2 rounded-md text-white font-semibold'>Back To Home</button></Link>
        </div>
    );
};

export default ErrorPage;