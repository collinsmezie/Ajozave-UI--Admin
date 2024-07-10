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
//     <div className="fixed bottom-0 w-full bg-white shadow-md flex justify-between items-center p-4">
//       {navItems.map((item, index) => (
//         <div key={index} className="flex flex-col items-center space-y-1">
//           <i className={`${item.icon} text-gray-600 text-xl`}></i>
//           <span className="text-gray-600 text-xs">{item.name}</span>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default BottomNavigation;



// src/components/BottomNavigation.js
import React from 'react';

const BottomNavigation = () => {
  const navItems = [
    { name: 'Home', icon: 'fas fa-home' },
    { name: 'Pay & Trans.', icon: 'fas fa-money-check-alt' },
    { name: 'Products', icon: 'fas fa-box-open' },
    { name: 'Cards', icon: 'fas fa-credit-card' },
    { name: 'Menu', icon: 'fas fa-bars' }
  ];

  return (
    <div className="fixed bottom-0 w-full bg-white shadow-md flex justify-between items-center p-2">
      {navItems.map((item, index) => (
        <div key={index} className="flex flex-col items-center space-y-1 w-1/5">
          {/* <i className={`${item.icon} text-gray-600 text-xl`}></i> */}
          
          <i className={`${item.icon} ${index === 0 ? 'text-red-600': 'text-gray-600'} text-xl`}></i>

          <span className="text-gray-600 text-xs">{item.name}</span>
        </div>
      ))}
    </div>
  );
};

export default BottomNavigation;
