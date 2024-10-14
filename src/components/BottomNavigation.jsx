// // src/components/BottomNavigation.js
// import React from 'react';

// const BottomNavigation = () => {
//   const navItems = [
//     { name: 'Home', icon: 'fas fa-home' },
//     { name: 'Pay & Trans.', icon: 'fas fa-money-check-alt' },
//     { name: 'Products', icon: 'fas fa-box-open' },
//     { name: 'Cards', icon: 'fas fa-credit-card' },
//     { name: 'Menu', icon: 'fas fa-bars' }
//   ];

//   return (
//     <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-white shadow-md flex justify-between items-center p-2">
//       {navItems.map((item, index) => (
//         <div key={index} className="flex flex-col items-center w-1/5">
//           <i className={`${item.icon} ${index === 0 ? 'text-red-600' : 'text-gray-400'} text-lg`}></i>
//           <span className={`${index === 0 ? 'text-red-600' : 'text-gray-400'} text-xs`}>{item.name}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BottomNavigation;





import React from 'react';
import { HomeIcon, PlusCircleIcon, WalletIcon, UserCircleIcon } from '@heroicons/react/24/outline';

const BottomNavigation = () => {
  const navItems = [
    { name: 'Home', icon: <HomeIcon className="h-6 w-6 text-purple-400" /> },
    { name: 'Wallet', icon: <WalletIcon className="h-6 w-6 text-purple-300" /> },
    { name: 'Products', icon: <PlusCircleIcon className="h-12 w-12 text-purple-600" /> }, // Plus icon larger
    { name: 'Menu', icon: <UserCircleIcon className="h-6 w-6 text-purple-300" /> },
  ];

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-sm bg-white shadow-md flex justify-between items-center py-4 px-6 rounded-t-2xl">
      {navItems.map((item, index) => (
        <div key={index} className="flex flex-col items-center w-1/5">
          {item.icon}
        </div>
      ))}
    </div>
  );
};

export default BottomNavigation;
