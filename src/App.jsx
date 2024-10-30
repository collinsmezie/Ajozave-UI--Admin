// src/App.js
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './components/pages/Home';
import AuthPage from './components/pages/AuthPage';
import Dashboard from './components/pages/Dashboard';
import CreateSessionPage from './components/pages/CreateSessionPage';
import SessionsPage from './components/pages/SessionsPage';

import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="w-full max-w-sm min-h-screen bg-white border border-gray-200 rounded-lg shadow-lg">
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/authentication" element={<AuthPage />} />
            <Route path="/" element={<Navigate replace to="/authentication" />} />
            <Route path="/create-session" element={<CreateSessionPage />} />
            <Route path="/sessions" element={<SessionsPage />} />

          </Routes>
        </div>
      </div>
  );
}

export default App;




























// // import { useState, createContext } from "react"
// // import { Routes, Route} from "react-router-dom"
// // import Home from "./components/pages/Home.jsx"
// // import RepositoryDetail from "./components/pages/RepositoryDetail.jsx"
// // import NotFound404 from "./components/pages/NotFound404.jsx"
// // import AlertBox from "./components/AlertBox.jsx"

// // export const MsgAlertContext = createContext();

// // function App() {

// //   const [msgAlert, setMsgAlert] = useState({});

// //   //Toggle alert box
// //   function closeAlert(){
// //     setMsgAlert({show: false, msg:''});
// // }

// //   return (
  
// //     <MsgAlertContext.Provider value={[msgAlert, setMsgAlert]}>
// //       {msgAlert?.show && <AlertBox msg={msgAlert?.msg} onClick={closeAlert} />}
// //       <main>
// //         <Routes>
// //           <Route path="/" element={<Home />} exact />
// //           <Route path="/repository/details/" element={<RepositoryDetail />} exact />
// //           <Route path="*" element={<NotFound404 />} exact />
// //         </Routes>
// //       </main>
// //     </MsgAlertContext.Provider>
// //   )
// // }

// // export default App


