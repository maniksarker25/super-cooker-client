import React from 'react';
import { Link } from 'react-router-dom';
import bannerImg from '../../../assets/banner.png'

const Banner = () => {
    return (
        <div className='mt-24 px-2 lg:flex gap-24'>
            <div className='lg:w-1/2 mt-10'>
                <h2 className='text-6xl font-semibold mb-3 '>Find Your Best Chef <br /> <span className='text-orange-600'>From Here</span></h2>
                <p className='my-6'>Welcome to Super Cook- your go-to source for delicious and healthy recipes! Our website is packed with a wide variety of recipes that are easy to make and bursting with flavor. Whether you're a seasoned cook or just getting started in the kitchen, you'll find something to love on CHEP.</p>
                <Link><button className='bg-orange-600 px-6 py-2 rounded-md text-white font-semibold mt-4'>More Details</button></Link>
            </div>
            <div>
                <img className='w-96' src={bannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;