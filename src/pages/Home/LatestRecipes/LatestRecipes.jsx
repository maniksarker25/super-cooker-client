import React, { useEffect, useState } from 'react';
import LatestRecipeList from './LatestRecipeList';
import LoadingSpiner from '../../LoadingSpiner/LoadingSpiner';

const LatestRecipes = () => {
    const [latestRecipes,setLatestRecipes] = useState([]);
    const [loading,setLoading] = useState(false)
   useEffect(()=>{
    setLoading(true)
    fetch('https://chep-recipe-hunter-server-maniksarker25.vercel.app/latest-recipes')
    .then(res=>res.json())
    .then(data =>{
        setLatestRecipes(data)
        setLoading(false)
    })
   },[])
   // show spinner when data in loading state
   if(loading){
    return <LoadingSpiner></LoadingSpiner>
   }
    return (
        <div className='my-32'>
            <h1 className='text-4xl text-center my-16 font-semibold'>Our Latest Recipes</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 '>
                {
                    latestRecipes?.map(recipe=><LatestRecipeList key={recipe.id} recipe={recipe}></LatestRecipeList>)
                }
            </div>
        </div>
    );
};

export default LatestRecipes;