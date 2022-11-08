import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Context/Authprovider/Authprovider';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return
    }
    if(!user){
        return children;
    }
    return <Navigate state={{form: location}} replace></Navigate>
};

export default PrivateRoute;