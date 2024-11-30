// import React, { useState } from 'react';
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
// import { useSwipeable } from 'react-swipeable';
// import StatsTab from '../components/StatsTab'
// import SessionsTab from '../components/SessionsTab';
// import GoalsTab from '../components/GoalsTab';
// import MembersTab from '../components/MembersTab';

// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState('Stats');
//   const [previousTab, setPreviousTab] = useState('Stats');
//   const totalContributions = 400000;
//   const remainingPayments = 100000;
//   const percentagePaymentsMade = ((totalContributions - remainingPayments) / totalContributions) * 100;

//   const tabOrder = ['Stats', 'Sessions', 'Goals', 'Members'];
//   const getAnimationClass = () => {
//     const currentIndex = tabOrder.indexOf(activeTab);
//     const previousIndex = tabOrder.indexOf(previousTab);

//     if (currentIndex > previousIndex) {
//       return 'animate-slide-in-right';
//     } else if (currentIndex < previousIndex) {
//       return 'animate-slide-in-left';
//     }
//     return '';
//   };

//   const handleSwipe = (direction) => {
//     const currentIndex = tabOrder.indexOf(activeTab);

//     if (direction === 'LEFT' && currentIndex < tabOrder.length - 1) {
//       setPreviousTab(activeTab);
//       setActiveTab(tabOrder[currentIndex + 1]);
//     }
//     if (direction === 'RIGHT' && currentIndex > 0) {
//       setPreviousTab(activeTab);
//       setActiveTab(tabOrder[currentIndex - 1]);
//     }
//   };

//   const swipeHandlers = useSwipeable({
//     onSwipedLeft: () => handleSwipe('LEFT'),
//     onSwipedRight: () => handleSwipe('RIGHT'),
//     trackMouse: true,
//   });

//   return (
//     <div className="animate-slide-in flex flex-col min-h-screen bg-purple-50">
//       <div className="flex-grow p-4 overflow-y-auto">
//         {/* Payment History Card */}
//         <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-4 mt-4 shadow-md">
//           <h2 className="text-white text-lg font-semibold">HISTORY</h2>
//           <div className="flex items-center justify-between mt-2">
//             <div className="relative w-24 h-24">
//               <CircularProgressbar
//                 value={percentagePaymentsMade}
//                 text={`${percentagePaymentsMade.toFixed(0)}%`}
//                 strokeWidth={8}
//                 styles={{
//                   path: { stroke: '#fff', strokeWidth: 8 },
//                   trail: { stroke: 'rgba(255, 255, 255, 0.3)', strokeWidth: 8 },
//                   text: { fill: '#fff', fontSize: '24px', fontWeight: 'bold' },
//                 }}
//               />
//             </div>
//             <div className="text-white">
//               <p className="text-sm">TOTAL CONTRIBUTIONS</p>
//               <p className="font-bold text-lg mb-3">₦{totalContributions.toLocaleString()}</p>
//               <p className="text-sm">REMAINING PAYMENTS</p>
//               <p className="font-bold text-lg">₦{remainingPayments.toLocaleString()}</p>
//             </div>
//           </div>
//           <div className="text-right mt-4">
//             {/* <button className="text-white underline text-sm">View all</button> */}
//           </div>
//         </div>

//         {/* Tab Navigation */}
//         <div className="flex justify-around mt-4 text-gray-700">
//           {tabOrder.map(tab => (
//             <button
//               key={tab}
//               className={`pb-2 ${activeTab === tab ? 'text-purple-600 border-b-2 border-purple-600' : ''}`}
//               onClick={() => {
//                 setPreviousTab(activeTab);
//                 setActiveTab(tab);
//               }}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         {/* Tab Content with Animation */}
//         <div {...swipeHandlers} className="mt-4">
//           <div className={`transition-all duration-500 ${getAnimationClass()}`}>
//             {activeTab === 'Stats' && <StatsTab />}
//             {activeTab === 'Sessions' && <SessionsTab />}
//             {activeTab === 'Goals' && <GoalsTab />}
//             {activeTab === 'Members' && <MembersTab />}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;










import React, { useState, useEffect } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useSwipeable } from 'react-swipeable';
import { FaHeadset } from 'react-icons/fa';
import StatsTab from '../components/StatsTab';
import SessionsTab from '../components/SessionsTab';
import GoalsTab from '../components/GoalsTab';
import MembersTab from '../components/MembersTab';
import { BellAlertIcon } from '@heroicons/react/24/outline';


const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Stats');
  const [previousTab, setPreviousTab] = useState('Stats');
  const totalContributions = 400000;
  const remainingPayments = 100000;
  const percentagePaymentsMade = ((totalContributions - remainingPayments) / totalContributions) * 100;

  const tabOrder = ['Stats', 'Sessions', 'Goals', 'Members'];
  const getAnimationClass = () => {
    const currentIndex = tabOrder.indexOf(activeTab);
    const previousIndex = tabOrder.indexOf(previousTab);

    if (currentIndex > previousIndex) {
      return 'animate-slide-in-right';
    } else if (currentIndex < previousIndex) {
      return 'animate-slide-in-left';
    }
    return '';
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSwipe = (direction) => {
    const currentIndex = tabOrder.indexOf(activeTab);

    if (direction === 'LEFT' && currentIndex < tabOrder.length - 1) {
      setPreviousTab(activeTab);
      setActiveTab(tabOrder[currentIndex + 1]);
    }
    if (direction === 'RIGHT' && currentIndex > 0) {
      setPreviousTab(activeTab);
      setActiveTab(tabOrder[currentIndex - 1]);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('LEFT'),
    onSwipedRight: () => handleSwipe('RIGHT'),
    trackMouse: true,
  });

  const fetchUserName = () => {
    const fullName = localStorage.getItem('username');
    return fullName ? fullName.split(' ')[0] : 'User';
  };


  console.log(fetchUserName())

  return (
    <div className="animate-slide-in flex flex-col min-h-screen bg-purple-50">
      {/* Modern Header */}
      {/* <header className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-purple-600 to-purple-500 shadow-md"> */}
      <header className="flex items-center justify-between px-4 py-3 bg-white">

        <div className="flex items-center space-x-3">
          <img
            src={`https://api.dicebear.com/5.x/avataaars/svg?seed=Username`}
            alt="User Avatar"
            className="w-10 h-10 rounded-full border-2 border-purple-300"
          />
          <div>
            {/* <p className="text-white text-sm font-medium">Hi, Username</p>
            <p className="text-white text-xs">Welcome back!</p> */}
            <p className="text-black text-sm font-medium">Hi, {fetchUserName()}</p>
            <p className="text-gray-600 text-xs">Welcome, let's save together!</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {/* <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition duration-300"> */}
          <button className="p-2 bg-white transition duration-300">

            <BellAlertIcon className="text-purple-600 w-6 h-6" />
          </button>
          {/* <button className="p-2 bg-white rounded-full shadow hover:bg-gray-100 transition duration-300"> */}
          <button className="p-2 bg-white transition duration-300">

            <FaHeadset className="text-purple-500 w-5 h-5" />
          </button>
        </div>
      </header>

      <div className="flex-grow p-4 overflow-y-auto">
        {/* Payment History Card */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-4 mt-4 shadow-md">
          <h2 className="text-white text-lg font-semibold">HISTORY</h2>
          <div className="flex items-center justify-between mt-2">
            <div className="relative w-24 h-24">
              <CircularProgressbar
                value={percentagePaymentsMade}
                text={`${percentagePaymentsMade.toFixed(0)}%`}
                strokeWidth={8}
                styles={{
                  path: { stroke: '#fff', strokeWidth: 8 },
                  trail: { stroke: 'rgba(255, 255, 255, 0.3)', strokeWidth: 8 },
                  text: { fill: '#fff', fontSize: '24px', fontWeight: 'bold' },
                }}
              />
            </div>
            <div className="text-white">
              <p className="text-sm">TOTAL CONTRIBUTIONS</p>
              <p className="font-bold text-lg mb-3">₦{totalContributions.toLocaleString()}</p>
              <p className="text-sm">REMAINING PAYMENTS</p>
              <p className="font-bold text-lg">₦{remainingPayments.toLocaleString()}</p>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-around mt-4 text-gray-700">
          {tabOrder.map((tab) => (
            <button
              key={tab}
              className={`pb-2 ${activeTab === tab ? 'text-purple-600 border-b-2 border-purple-600' : ''
                }`}
              onClick={() => {
                setPreviousTab(activeTab);
                setActiveTab(tab);
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content with Animation */}
        <div {...swipeHandlers} className="mt-4">
          <div className={`transition-all duration-500 ${getAnimationClass()}`}>
            {activeTab === 'Stats' && <StatsTab />}
            {activeTab === 'Sessions' && <SessionsTab />}
            {activeTab === 'Goals' && <GoalsTab />}
            {activeTab === 'Members' && <MembersTab />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
