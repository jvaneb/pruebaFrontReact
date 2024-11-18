import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppRoutes from './routes/AppRoutes';
import { AuthProvider } from './context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
};

export default App;
