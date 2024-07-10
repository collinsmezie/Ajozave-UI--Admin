



// src/App.js
import React from 'react';
import Header from './components/Header';
import AccountSection from './components/AccountSection';
import QuickLinks from './components/QuickLinks';
import SpecialOffers from './components/SpecialOffers';
import BottomNavigation from './components/BottomNavigation';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div className="bg-gray-100 min-h-screen pb-16">
      <Header />
      <AccountSection />
      <QuickLinks />
      <SpecialOffers />
      <BottomNavigation />
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



// src/App.js
// import React from 'react';
// import Header from './components/Header';
// import AccountSection from './components/AccountSection';
// import QuickLinks from './components/QuickLinks';
// import SpecialOffers from './components/SpecialOffers';
// import BottomNavigation from './components/BottomNavigation';

// function App() {
//   return (
//     <div className="bg-gray-100 min-h-screen pb-16">
//       <Header />
//       <AccountSection />
//       <QuickLinks />
//       <SpecialOffers />
//       <BottomNavigation />
//     </div>
//   );
// }

// export default App;

