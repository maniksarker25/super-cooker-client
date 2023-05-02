import React from "react";
import {FaEye} from "react-icons/fa";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

const LatestRecipeList = ({ recipe }) => {
  const { name, picture, description, rating, view } = recipe;
  return (
    <div className="p-2 lg:p-0">
      <img className="h-48 w-full" src={picture} alt="" />
      <div className="card-body">
        <h5 className="font-semibold">{name}</h5>
        <p>{description}</p>
        <hr className="mt-2" />
        <div className="flex justify-between">
          <div className=" flex  items-center gap-1">
            <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
            <span>{rating}</span>
          </div>
          <div className="flex items-center">
            <FaEye></FaEye> {view}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestRecipeList;
