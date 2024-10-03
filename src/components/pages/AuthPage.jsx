// src/components/AuthPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Auth from '../Auth';

function AuthPage() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here
    // If login is successful, redirect to home page
    navigate('/home');
  };

  return <Auth setLogin={handleLogin} />;
}

export default AuthPage;