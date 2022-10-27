import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { authContext } from '../Context/Context';

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useContext(authContext);
    const location = useLocation();
    if (isLoading) {
        return <p>loading......</p>
    }
    if (!user) {
        return <Navigate to={'/login'} state={{'from':location}} replace ></Navigate>
    }
    return children;
   
};

export default PrivateRoute;