import React from "react";
import { Link } from "react-router-dom";

const ChepList = ({ chep }) => {
  const { name,picture,experience_years,num_recipes,likes } = chep;
  return (
    <div className="bg-gray-200 p-2 rounded-md">
        <img className="h-64 w-full rounded-md " src={picture} alt="" />
        <div className="card-body">
            <h4 className="text-2xl font-semibold mt-4">{name}</h4>
            <p>{experience_years} Years of experience</p>
            <p>Numbers of recipes: {num_recipes}</p>
            <div className="mt-8 mb-2 flex items-center justify-between">
                <p>Likes: {likes}</p>
                <Link><button className="bg-orange-600 px-6 py-2 rounded-md text-white  ">View Recipes</button></Link>
            </div>
        </div>
    </div>
  );
};

export default ChepList;
