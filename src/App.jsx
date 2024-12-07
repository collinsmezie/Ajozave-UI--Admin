import React from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import HomePage from './pages/Home';
import AuthPage from './pages/Authentication';
import Dashboard from './pages/Dashboard';
import CreateSessionPage from './pages/CreateSession';
import EditSessionPage from './pages/EditSession';
import SessionsPage from './pages/Sessions';
import SessionDetailsPage from './pages/SessionDetails';
import MemberSelectionPage from './pages/MemberSelection';
import BottomNavigation from './components/BottomNavigation';
import ComingSoon from './pages/comingSoon';

import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/authentication';

  return (
    <div className="bg-white min-h-screen flex items-center justify-center">
      <div className="w-full max-w-sm min-h-screen bg-white rounded-lg shadow-lg">
        <Routes>
          <Route path="/authentication" element={<AuthPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Navigate replace to="/authentication" />} />
          <Route path="/create-session" element={<CreateSessionPage />} />
          <Route path="/edit-session/:sessionId" element={<EditSessionPage />} />
          <Route path="/sessions/:sessionId" element={<SessionDetailsPage />} />
          <Route path="/sessions" element={<SessionsPage />} />
          <Route path="/sessions/:sessionId/members" element={<MemberSelectionPage />} />
          <Route path="/members" element={<MemberSelectionPage />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
        </Routes>
        {!isAuthPage && <BottomNavigation />}
      </div>
    </div>
  );
}

export default App;
