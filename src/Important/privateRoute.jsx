import React from 'react'
import { useAuthContext } from 'Context/AuthContext'
import { Navigate, useLocation } from 'react-router-dom';

export default function PrivateRoute({ Component }) {

    const { isAuth } = useAuthContext();

    const location = useLocation;

    if (!isAuth)
        return <Navigate to='/Auth' state={{ from: location.pathname }} replace />

    return (
        <Component />
    )
}
