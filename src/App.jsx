// <div className="bg-white min-h-screen pb-16 border border-blue-500 flex items-center justify-center fixed inset-0">

// src/App.js
// import React, { useState } from 'react';
// import { Route, Switch } from 'react-router-dom';
// import Header from './components/Header';
// import AccountSection from './components/AccountSection';
// import QuickLinks from './components/QuickLinks';
// import SpecialOffers from './components/SpecialOffers';
// import BottomNavigation from './components/BottomNavigation';
// import Auth from './components/Auth';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// function App() {
//   const [login, setLogin] = useState(false);

//   return (
//     <div className="bg-white min-h-screen flex items-center justify-center">
//       <div className="w-full max-w-sm min-h-screen bg-white border border-gray-200 rounded-lg shadow-lg">
//         {login ? (
//           <>
//             <Header />
//             <AccountSection />
//             <QuickLinks />
//             <SpecialOffers />
//             <BottomNavigation />
//           </>
//         ) : (
//           <Auth setLogin={setLogin} />
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;


// src/App.js
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './components/pages/Home';
import AuthPage from './components/pages/AuthPage';
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="w-full max-w-sm min-h-screen bg-white border border-gray-200 rounded-lg shadow-lg">
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route path="/authentication" element={<AuthPage />} />
            <Route path="/" element={<Navigate replace to="/authentication" />} />
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


