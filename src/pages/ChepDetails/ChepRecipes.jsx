import React, { useState } from "react";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Toaster, toast } from 'react-hot-toast';

const ChepRecipes = ({ recipe }) => {
  const { name, description, rating, image, ingredients,cooking_method } = recipe;
  const [favorite,setFavorite] = useState(false)

  // handle favorite
  const handleAddToFavorite = () =>{
    toast.success(" Successfully Added to favorite");
    setFavorite(true)
  }
  return (
    <div className="border p-2 rounded-md relative">
      <img className="w-full h-64 rounded-md" src={image} alt="" />
      <div className="card-body ">
        <h5 className="text-xl font-semibold">{name}</h5>
        <h5 className="text-xl font-semibold">Ingredients:</h5>
        {ingredients.map((ingredient, i) => (
          <li key={i}>{ingredient}</li>
        ))}
        <div className="mb-8">
            <h5 className="text-xl font-semibold">Cooking Method:</h5>
            <p>{cooking_method.slice(0,150)}...</p>
        </div>
        <div className="flex justify-between absolute bottom-1 right-2 left-2">
          <div className=" flex items-center gap-1 ">
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
            <span>{rating}</span>
          </div>
          <button onClick={handleAddToFavorite}  className={favorite?"bg-orange-200 px-6 py-2 rounded-md text-white font-semibold":"bg-orange-600 px-6 py-2 rounded-md text-white font-semibold"} disabled={favorite}>Add Favorite </button>
        </div>
      </div>
      <Toaster/>
    </div>
  );
};

export default ChepRecipes;
