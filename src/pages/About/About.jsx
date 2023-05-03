import React from "react";
import aboutImg from '../../assets/about.jpg'
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="mt-24 px-2 lg:flex gap-24">
      <div className="lg:w-1/2 mt-10">
        <h2 className="text-6xl font-semibold mb-3 text-orange-600 ">
          About Us
        </h2>
        <p className="my-6">
          {" "}
          Our mission is to inspire people to adopt a more plant-based lifestyle
          by providing them with easy-to-follow recipes that are both nutritious
          and budget-friendly. We understand that eating healthy can sometimes
          feel overwhelming and expensive, which is why we strive to make it as
          accessible and enjoyable as possible. Whether you're a seasoned vegan
          or simply looking to add more plant-based meals to your diet, our
          recipes are designed to fit a variety of tastes and dietary
          preferences.
        </p>
        <Link><button className='bg-orange-600 px-6 py-2 rounded-md text-white font-semibold mt-4'>Read More</button></Link>
      </div>
      <div className="w-1/2">
        <img className="w-96" src={aboutImg} alt="" />
      </div>
    </div>
  );
};

export default About;
