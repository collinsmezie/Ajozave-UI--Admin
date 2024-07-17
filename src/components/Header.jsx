



// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    // <div class="flex justify-between items-center p-4 bg-white shadow-md sticky top-0 w-full z-50">

    <div className="flex justify-between items-center p-4 bg-white sticky top-0 left-0 right-0">
      <div className="text-2xl font-bold text-red-600">Ajo<span className="text-gray-400">Zave</span></div>
      <div className="flex space-x-4">
        <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center">
          <i className="fas fa-search text-gray-600 text-xl"></i>
        </div>
        <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center">
          <i className="fas fa-bell text-gray-600 text-xl"></i>
        </div>
        <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center">
          <i className="fas fa-user-circle text-gray-600 text-xl"></i>
        </div>
      </div>
    </div>
  );
};

export default Header;
