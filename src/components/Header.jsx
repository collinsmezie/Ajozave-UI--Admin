// // src/components/Header.js
// import React from 'react';

// const Header = () => {
//   return (
//     <div className="flex justify-between items-center p-4 bg-white shadow-md">
//       <div className="text-2xl font-bold text-red-600">OneBank</div>
//       <div className="flex space-x-4">
//         <i className="fas fa-search text-gray-600"></i>
//         <i className="fas fa-bell text-gray-600"></i>
//         <i className="fas fa-user-circle text-gray-600"></i>
//       </div>
//     </div>
//   );
// };

// export default Header;



// src/components/Header.js
// import React from 'react';

// const Header = () => {
//   return (
//     <div className="flex justify-between items-center p-4 bg-white shadow-md">
//       <div className="text-2xl font-bold text-red-600">OneBank</div>
//       <div className="flex space-x-4">
//         <div className="bg-gray-200 rounded-full p-2">
//           <i className="fas fa-search text-gray-600 text-xl"></i>
//         </div>
//         <div className="bg-gray-200 rounded-full p-2">
//           <i className="fas fa-bell text-gray-600 text-xl"></i>
//         </div>
//         <div className="bg-gray-200 rounded-full p-2">
//           <i className="fas fa-user-circle text-gray-600 text-xl"></i>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;



// src/components/Header.js
import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-md">
      {/* <div className="text-2xl font-bold text-red-600">OneBank</div> */}
      <div className="text-2xl font-bold text-red-600">One<span className="text-gray-300">Bank</span></div>
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
