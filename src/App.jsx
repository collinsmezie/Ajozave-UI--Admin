// src/App.js
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './components/pages/Home';
import AuthPage from './components/pages/AuthPage';
import Dashboard from './components/pages/Dashboard';
import CreateSessionPage from './components/pages/CreateSessionPage';
import SessionsPage from './components/pages/SessionsPage';
import SessionDetailsPage from './components/pages/SessionDetailsPage';
import MemberSelectionPage from './components/pages/MemberSelectionPage';

import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="w-full max-w-sm min-h-screen bg-white border border-gray-200 rounded-lg shadow-lg">
          <Routes>
            <Route path="/authentication" element={<AuthPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/" element={<Navigate replace to="/authentication" />} />
            <Route path="/create-session" element={<CreateSessionPage />} />
            <Route path="/sessions/:sessionId" element={<SessionDetailsPage />} />
            <Route path="/sessions" element={<SessionsPage />} />
            <Route path="/sessions/:sessionId/members" element={<MemberSelectionPage />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;