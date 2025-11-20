import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../authWrapper/AuthContext';

const ProtectedRoute = () => {
    const { user } = useAuth();
    if (user) {
        return <Outlet />;
    }

    return <Navigate to="/login" replace />;
};

export default ProtectedRoute;