import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Audio } from 'react-loader-spinner';
import { AuthContext } from '../../Context/Authentication/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
   

    const location = useLocation()
    if(loading){
        return <h2>Loading ...</h2>
    }
    if(user){
        return children;
    }
    return <Navigate to={'/login'} state={{form: location}} replace></Navigate>
};

export default PrivateRoute;