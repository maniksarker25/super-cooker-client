import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {

            }
        ]
    }
])

export default route;