import React, { useEffect, useState } from 'react';
import LatestRecipeList from './LatestRecipeList';

const LatestRecipes = () => {
    const [latestRecipes,setLatestRecipes] = useState([]);
   useEffect(()=>{
    fetch('http://localhost:4000/latest-recipes')
    .then(res=>res.json())
    .then(data => setLatestRecipes(data))
   },[])
    return (
        <div className='my-32'>
            <h1 className='text-4xl text-center my-16 font-semibold'>Our Latest Recipes</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
                {
                    latestRecipes.map(recipe=><LatestRecipeList key={recipe.id} recipe={recipe}></LatestRecipeList>)
                }
            </div>
        </div>
    );
};

export default LatestRecipes;