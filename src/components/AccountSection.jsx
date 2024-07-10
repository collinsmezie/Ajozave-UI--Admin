// // src/components/AccountSection.js
// import React from 'react';

// const AccountSection = () => {
//   return (
//     <div className="p-4 bg-white shadow-md mt-4 mx-2 rounded-lg">
//       <div className="flex justify-between items-center">
//         <span className="text-blue-600 font-semibold">Naira Account</span>
//         <span className="text-red-600 text-sm">See All</span>
//       </div>
//       <div className="bg-blue-700 text-white p-4 rounded-lg mt-4 relative">
//         <div className="text-lg font-semibold">₦********</div>
//         <div className="mt-2">
//           <p>0096132921</p>
//           <p>Savings - Regular</p>
//           <p>Chimezie Obinwa</p>
//         </div>
//         <i className="fas fa-eye absolute top-4 right-4 text-white"></i>
//       </div>
//     </div>
//   );
// };

// export default AccountSection;

// src/components/AccountSection.js
// import React from 'react';

// const AccountSection = () => {
//   return (
//     <div className="mt-4 mx-2 bg-gray-100 rounded-lg p-4">
//       <div className="text-blue-600 font-semibold">
//         {/* <div className="bg-gray-200 rounded-full p-2"> */}
//           <div className="bg-teal-500 text-white px-3 py-1 rounded-full">
//             Naira Account
//           </div>
//         {/* </div> */}
//         <div className="text-red-500 font-semibold cursor-pointer">See All</div>
//       </div>
//       <div className="bg-blue-600 text-white p-4 rounded-lg shadow-md">
//         <div className="flex justify-between items-center mb-4">
//           <div className="text-2xl">N********</div>
//           <i className="fas fa-eye text-xl"></i>
//         </div>
//         <div>
//           <div>0096132921</div>
//           <div>Savings - Regular</div>
//           <div>Chimezie Obinwa</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AccountSection;




// src/components/AccountSection.js
import React from 'react';

const AccountSection = () => {
  return (
    <div className="mt-4 mx-2 bg-gray-100 rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="bg-gray-300 rounded-full p-2">
          <div className="bg-teal-600 text-white px-3 py-1 rounded-full font-bold">
            Naira Account
          </div>
        </div>
        <div className="text-red-500 font-semibold cursor-pointer">See All</div>
      </div>
      {/* <div className="bg-blue-800 text-white p-4 rounded-lg shadow-md"> */}
      {/* <div className="bg-[#2A3847] text-white p-4 rounded-lg shadow-md"> */}
      {/* <div className="bg-gradient-to-b from-blue-800 to-blue-700 text-white p-4 rounded-lg shadow-md"> */}
      <div className="bg-gradient-to-r from-blue-800 to-blue-600 text-white p-4 rounded-lg shadow-md">
      {/* <div className="bg-gradient-to-r from-black to-blue-600 text-white p-4 rounded-lg shadow-md"> */}
        <div className="flex justify-between items-center mb-4">
          <div className="text-2xl">₦********</div>
          <i className="fas fa-eye text-xl"></i>
        </div>
        <div>
          <div>0096132921</div>
          <div>Savings - Regular</div>
          <div>Chimezie Obinwa</div>
        </div>
      </div>
    </div>
  );
};

export default AccountSection;
