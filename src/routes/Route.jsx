import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Blog from '../pages/Blog/Blog';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import Login from '../pages/Login/Login';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
               path:'/',
               element:<Home></Home> 
            },
            {
                path:'blog',
                element:<Blog></Blog>
            },
            {
                path:'about',
                element:<About></About>
            },
            {
                path:'login',
                element:<Login></Login>
            }

        ]
    }
])

export default router;