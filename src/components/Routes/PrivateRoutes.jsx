import React, { useContext } from 'react';
import { AuthContext } from '../../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <p className='text-center text-3xl'>Please wait</p>
    }
    if(user){
        return children;
    }
    return <Navigate to='/login' replace={true}>Log in</Navigate>
};

export default PrivateRoutes;