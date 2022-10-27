import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../Context/Context';

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useContext(authContext);
    const location = useLocation();
    if (isLoading) {
        return <div>loading......</div>
    }
    if (!user) {
        return <Navigate to={'/login'} state={{'from':location}} replace ></Navigate>
    }
    else {
        return children;
    }
   
};

export default PrivateRoute;