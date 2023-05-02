import React from 'react';
import Banner from '../Banner/Banner';
import ChepSection from '../ChepSection/ChepSection';
import LatestRecipeList from '../LatestRecipes/LatestRecipeList';
import LatestRecipes from '../LatestRecipes/LatestRecipes';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ChepSection></ChepSection>
            <LatestRecipes></LatestRecipes>
        </div>
    );
};

export default Home;