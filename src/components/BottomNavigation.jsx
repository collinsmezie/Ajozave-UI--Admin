import React from 'react';
import { HomeIcon, PlusCircleIcon, WalletIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import { useNavigate } from 'react-router-dom';

const BottomNavigation = () => {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  const navItems = [
    { name: 'Home', icon: <HomeIcon className="h-6 w-6 text-purple-400" />, path: '/dashboard' },
    { name: 'Wallet', icon: <WalletIcon className="h-6 w-6 text-purple-300" />, path: '/sessions' },
    { name: 'Create Session', icon: <PlusCircleIcon className="h-12 w-12 text-purple-600" />, path: '/create-session' },
    { name: 'Menu', icon: <UserCircleIcon className="h-6 w-6 text-purple-300" />, path: '/menu' },
  ];

  return (
    <div className="sticky bottom-0 bg-white shadow-md flex justify-between items-center py-4 px-6 w-full">
      {navItems.map((item, index) => (
        <div 
          key={index} 
          className="flex flex-col items-center w-1/5" 
          onClick={() => handleNavigation(item.path)}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
};

export default BottomNavigation;
