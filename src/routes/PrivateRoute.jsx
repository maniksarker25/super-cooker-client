import React, { useContext } from 'react';
import { authContext } from '../Providers/AuthProvider';
import { Navigate, useLocation, useNavigation } from 'react-router-dom';
import { Progress } from 'flowbite-react';
import LoadingSpiner from '../pages/LoadingSpiner/LoadingSpiner';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(authContext);
    const location = useLocation()
    if(loading){
        return  <LoadingSpiner></LoadingSpiner>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login'state={{from:location}} replace></Navigate>
};

export default PrivateRoute;