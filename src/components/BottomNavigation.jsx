// import React from 'react';
// import { HomeIcon, PlusCircleIcon, WalletIcon, UserCircleIcon, EyeIcon } from '@heroicons/react/24/outline';
// import { useNavigate } from 'react-router-dom';

// const BottomNavigation = () => {
//   const navigate = useNavigate();

//   const handleNavigation = (path) => {
//     navigate(path);
//   };

//   const navItems = [
//     { name: 'Home', icon: <HomeIcon className="h-5 w-5 text-purple-400" />, path: '/dashboard' },
//     { name: 'Sessions', icon: <EyeIcon className="h-5 w-5 text-purple-300" />, path: '/sessions' },
//     { name: 'Create Session', icon: <PlusCircleIcon className="h-14 w-14 text-purple-500 transform transition duration-200 hover:scale-110 mt-2" />, path: '/create-session' },
//     { name: 'Wallet', icon: <WalletIcon className="h-5 w-5 text-purple-300" />, path: '/wallet' },
//     { name: 'Menu', icon: <UserCircleIcon className="h-5 w-5 text-purple-300" />, path: '/menu' },
//   ];

//   return (
//     // <div className="sticky bottom-0 bg-white shadow-lg flex justify-evenly items-center py-2 px-2 sm:px-8 lg:px-12 w-full">
//     <div className="sticky bottom-0 bg-white shadow-lg flex justify-evenly items-center py-2 px-2 sm:px-8 lg:px-12 w-full z-10">
//       {navItems.map((item, index) => (
//         <div
//           key={index}
//           className={`flex flex-col items-center cursor-pointer ${item.name === 'Create Session' ? 'translate-y-[-10px]' : ''}`}
//           style={{
//             margin: item.name === 'Create Session' ? '0 10px' : '0 10px',
//             flex: item.name === 'Create Session' ? '1 1 0' : '0 1 20%',
//           }}
//           onClick={() => handleNavigation(item.path)}
//         >
//           {item.icon}
//           {item.name !== 'Create Session' && (
//             <span className="mt-1 text-xs text-gray-500">{item.name}</span>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BottomNavigation;












import React, { useState } from 'react';
import { HomeIcon, CreditCardIcon, WalletIcon, UserCircleIcon, EyeIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const BottomNavigation = () => {
  const navigate = useNavigate();
  const [activeNav, setActiveNav] = useState('Home'); // Initial name for active item

  const handleNavigation = (path, name) => {
    setActiveNav(name);  // Set the clicked item's name as active
    navigate(path);
  };

  const navItems = [
    { name: 'Home', icon: <HomeIcon className="h-6 w-6" />, path: '/dashboard' },
    { name: 'Sessions', icon: <EyeIcon className="h-6 w-6" />, path: '/sessions' },
    { name: 'Cards', icon: <CreditCardIcon className="h-6 w-6" />, path: '/coming-soon' },
    { name: 'Wallet', icon: <WalletIcon className="h-6 w-6" />, path: '/coming-soon' },
    { name: 'Menu', icon: <UserCircleIcon className="h-6 w-6" />, path: '/coming-soon' },
  ];

  return (
    <div className="sticky bottom-0 bg-white shadow-md flex justify-around items-center py-2 w-full z-10 rounded-t-2xl">
      {navItems.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center cursor-pointer"
          onClick={() => handleNavigation(item.path, item.name)}
        >
          <div
            className={`flex items-center justify-center rounded-full p-3 transition-all duration-200 ${
              activeNav === item.name ? 'bg-purple-600 text-white' : 'bg-transparent text-purple-400'
            }`}
          >
            {React.cloneElement(item.icon, {
              className: "h-6 w-6",
            })}
          </div>
          <span
            className={`mt-1 text-xs transition-colors ${
              activeNav === item.name ? 'text-purple-600 font-medium' : 'text-gray-500'
            }`}
          >
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default BottomNavigation;
