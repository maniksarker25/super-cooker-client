import React from "react";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const ChepRecipes = ({ recipe }) => {
  const { name, description, rating, image, ingredients,cooking_method } = recipe;
  return (
    <div className="border p-2 rounded-md">
      <img className="w-full h-64 rounded-md" src={image} alt="" />
      <div className="card-body flex-col">
        <h5 className="text-xl font-semibold">{name}</h5>
        <h5 className="text-xl font-semibold">Ingredients:</h5>
        {ingredients.map((ingredient, i) => (
          <li key={i}>{ingredient}</li>
        ))}
        <div>
            <h5 className="text-xl font-semibold">Cooking Method:</h5>
            <p>{cooking_method}</p>
        </div>
        <div className="flex justify-between">
          <div className=" flex  items-center gap-1 ">
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
            <span>{rating}</span>
          </div>
          <button className="bg-orange-600 px-6 py-2 rounded-md text-white font-semibold">Add Favorite </button>
        </div>
      </div>
    </div>
  );
};

export default ChepRecipes;