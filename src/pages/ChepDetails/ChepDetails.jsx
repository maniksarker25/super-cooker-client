import React from "react";
import { useLoaderData } from "react-router-dom";
import ChepRecipes from "./ChepRecipes";


const ChepDetails = () => {
  const chep = useLoaderData();
  const {
    name,
    picture,
    description,
    likes,
    experience_years,
    num_recipes,
    recipes,
  } = chep;
  return (
    <div className=" mt-12 lg:mt-32 border p-4">
      <div className="lg:flex gap-6 justify-between">
        <img className="h-96 w-full lg:w-3/5" src={picture} alt="" />
        <div className=" w-full lg:w-1/2 ">
          <h5 className="text-2xl font-semibold ">{name}</h5>
          <p>{description}</p>
          <p className="mt-8 font-semibold">
            {experience_years} Years of experience
          </p>
          <p className="my-3 font-semibold">
            Numbers of recipes: {num_recipes}
          </p>
          <p className="font-semibold">Likes: {likes}</p>
        </div>
      </div>
      <div>
        <h4 className="my-6 text-3xl font-semibold">Some best recipes</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recipes.map((recipe, i) => (
            <ChepRecipes key={i} recipe={recipe}></ChepRecipes>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChepDetails;
