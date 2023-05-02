import React, { useContext } from 'react';
import { authContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Progress } from 'flowbite-react';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(authContext);
    const location = useLocation()
    if(loading){
        return  <Progress
        progress={45}
        color="dark"
      />
    }
    if(user){
        return children;
    }
    return <Navigate to='/login'state={{from:location}} replace></Navigate>
};

export default PrivateRoute;