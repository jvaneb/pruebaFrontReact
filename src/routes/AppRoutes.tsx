import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import Login from '../pages/Login/Login';
import Home from '../pages/Home/Home';

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? children : <Navigate to="/login" />;
};

const AppRoutes: React.FC = () => {
  const { isAuthenticated, login } = useAuth();

  useEffect(() => {
    const storedToken = localStorage.getItem('authToken');
    if (storedToken && !isAuthenticated) {
      login(storedToken);
    }
  }, [isAuthenticated, login]);

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/home"
          element={<Home/>}
          // element={
          //   <ProtectedRoute>
          //     <Home />
          //   </ProtectedRoute>
          // }
        />
        <Route
          path="/quienes-somos"
          element={<Home/>}
        />
        <Route
          path="/productos"
          element={<Home/>}
        />
        <Route
          path="/contacto"
          element={<Home/>}
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};


export default AppRoutes;
