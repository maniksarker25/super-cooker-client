import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../layout/Main';
import Blog from '../pages/Blog/Blog';
import About from '../pages/About/About';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home/Home';
import ChepDetails from '../pages/ChepDetails/ChepDetails';
import Registration from '../pages/Registration/Registration';
import PrivateRoute from './PrivateRoute';
import ErrorPage from '../pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
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
            },
            {
                path:'registration',
                element:<Registration></Registration>
            },
            {
                path:'cheps/:id',
                element:<PrivateRoute><ChepDetails></ChepDetails></PrivateRoute>
            }

        ]
    }
])

export default router;