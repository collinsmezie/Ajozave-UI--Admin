// import React, { useState } from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBank, faFingerprint, faMoon, faUniversity } from "@fortawesome/free-solid-svg-icons";
// import { faGoogle } from "@fortawesome/free-brands-svg-icons";
// import { faGithub } from '@fortawesome/free-brands-svg-icons';

// const Auth = () => {
//   const [isExistingCustomer, setIsExistingCustomer] = useState(false);

//   return (
//     <div className="bg-white min-h-screen flex items-center justify-center font-nunito">
//       <div className="relative w-full max-w-sm bg-white rounded-lg shadow-lg p-6 overflow-hidden">
//         <div className="absolute top-[-30px] right-0 left-0 flex items-center justify-center">
//           <div className="flex items-center justify-center w-12 h-12 bg-red-500 rounded-full">
//             <div className="w-5 h-5 bg-white rounded-full"></div>
//           </div>
//         </div>
//         <div className="text-center mt-10 mb-6">
//           <h1 className="text-2xl font-bold text-gray-600">Hello There</h1>
//           <p className="text-gray-600">Let's get you started</p>
//         </div>

//         <div className="flex mb-4 border rounded-full">
//           <div
//             onClick={() => setIsExistingCustomer(false)}
//             className={`flex-1 py-2 text-center cursor-pointer rounded-full ${!isExistingCustomer ? 'bg-sky-400 text-white' : 'text-gray-600'}`}
//           >
//             New Customer
//           </div>
//           <div
//             onClick={() => setIsExistingCustomer(true)}
//             className={`flex-1 py-2 text-center cursor-pointer rounded-full ${isExistingCustomer ? 'bg-sky-400 text-white' : 'text-gray-600'}`}
//           >
//             Existing Customer
//           </div>
//         </div>

//         <div className="space-y-4">
//           <div className="relative">
//             <label className="absolute top-1 left-3 text-gray-500">Username / Email</label>
//             <input type="text" placeholder="Enter username" className="w-full px-4 py-3 rounded-lg bg-gray-100 mt-4" />
//           </div>
//           <div className="relative">
//             <label className="absolute top-1 left-3 text-gray-500">Password</label>
//             <input type="password" placeholder="Enter password" className="w-full px-4 py-3 rounded-lg bg-gray-100 mt-4" />
//             <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
//               <FontAwesomeIcon icon={faFingerprint} className="text-gray-600" />
//             </button>
//           </div>
//           <div className="text-right">
//             <a href="#" className="text-red-500">Forgot Password?</a>
//           </div>
//           <button className="w-full bg-gray-800 text-white py-3 rounded-lg">Log In</button>
//         </div>

//         <div className="flex justify-between items-center mt-4">
//           <button className="flex items-center justify-center w-12 h-12 bg-white border border-gray-300 rounded-full">
//             <FontAwesomeIcon icon={faGoogle} className="text-sky-500" />
//           </button>
//           <button className="flex items-center justify-center w-12 h-12 bg-white border border-gray-300 rounded-full">
//             <FontAwesomeIcon icon={faFingerprint} className="text-gray-500 text-3xl" />
//           </button>
//           <button className="flex items-center justify-center w-12 h-12 bg-white border border-gray-300 rounded-full">
//             <FontAwesomeIcon icon={faGithub} className="text-teal-500" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Auth;








import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBank, faFingerprint, faMoon, faUniversity } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const Auth = () => {
  const [selectedOption, setSelectedOption] = useState('new');

  const [isExistingCustomer, setIsExistingCustomer] = useState(false);


  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    // <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      // <div className=" top-0 left-0 border h-screen w-screen flex flex-col items-center justify-center bg-gray-100 p-4 overflow-hidden z-10">
      <div className="fixed w-full max-w-sm p-3 overflow-hidden">
        <div className="relative left-[300px] flex items-center justify-center w-8 h-8 bg-red-500 rounded-full">
          <div className="w-2 h-2 bg-white rounded-full relative bottom-[5px] left-[5px]"></div>
        </div>
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-600">Hello There</h1>
        </div>
        <h2 className="text-lg font-semibold mb-8">Let's get you started</h2>

        <div className="flex mb-12 border rounded-full">
          <div
            onClick={() => setIsExistingCustomer(false)}
            className={`flex-1 py-2 text-center cursor-pointer rounded-full ${!isExistingCustomer ? 'bg-sky-400 text-white text-sm' : 'text-gray-600 text-sm'}`}
          >
            New Customer
          </div>
          <div
            onClick={() => setIsExistingCustomer(true)}
            className={`flex-1 py-2 text-center cursor-pointer rounded-full ${isExistingCustomer ? 'bg-sky-400 text-white text-sm' : 'text-gray-600 text-sm'}`}
          >
            Existing Customer
          </div>
        </div>

        {!isExistingCustomer ? (
          <>
            <div className="mb-4 w-full p-2 border border-gray-300 bg-gray-200 rounded-lg">
              <label className="block text-gray-700 mb-2 text-sm">Username / Email</label>
              <input type="text" placeholder="Enter username" className="border-none bg-gray-200 outline-none w-full" />
            </div>

            <div className="mb-4 relative w-full p-2 border border-gray-300 bg-gray-200 rounded-lg">
              <label className="block text-gray-700 mb-2 text-sm">Password</label>
              <input type="password" placeholder="Enter password" className="border-none bg-gray-200 outline-none w-full" />
              <button className="absolute right-3 top-3">
                <i className="fas fa-eye text-l text-gray-400"></i>
              </button>
            </div>
          </>
        ) : (
          <div className="mb-4 relative w-full p-2 border border-gray-300 bg-gray-200 rounded-lg">
            <label className="block text-gray-700 mb-2 text-sm">Password</label>
            <input type="password" placeholder="Enter password" className="border-none bg-gray-200 outline-none w-full" />
            <button className="absolute right-3 top-3">
              <i className="fas fa-eye text-l text-gray-400"></i>
            </button>
          </div>
        )}

        <button className="text-sm text-red-500 mb-4">Forgot Password?</button>

        <button className="w-full py-3 border border-gray-300 text-black rounded-lg mb-4">Log In</button>

        {/* <div className="flex justify-between items-center mt-4"> */}
        <div className="fixed bottom-0 left-1 w-full flex justify-around items-center p-4">
          <button className="flex items-center justify-center w-12 h-12 bg-white border border-gray-300 rounded-full">
            <FontAwesomeIcon icon={faGoogle} className="text-sky-500" />
          </button>
          <button className="flex items-center justify-center w-12 h-12 bg-white border border-gray-300 rounded-full">
            <FontAwesomeIcon icon={faFingerprint} className="text-gray-500 text-3xl" />
          </button>
          <button className="flex items-center justify-center w-12 h-12 bg-white border border-gray-300 rounded-full">
            <FontAwesomeIcon icon={faGithub} className="text-teal-500" />
          </button>
        </div>
      </div >
    
  
  );
};

export default Auth;











// import React, { useState } from 'react';

// const Auth = () => {
//   const [selectedOption, setSelectedOption] = useState('new');

//   const handleOptionChange = (option) => {
//     setSelectedOption(option);
//   };

//   return (
//     <div className="min-h-screen bg-white flex flex-col justify-center items-center font-sans">
//       <div className="w-full max-w-sm p-4">
//         <h2 className="text-2xl font-bold mb-4">Welcome</h2>
//         <p className="text-lg mb-4">Login to your account</p>

//         <div className="relative flex justify-center mb-4">
//           <div className="flex items-center justify-between w-full bg-gray-700 rounded-full p-1 relative">
//             <button
//               onClick={() => handleOptionChange('new')}
//               className="flex-1 text-center py-2 rounded-full text-white relative z-10"
//             >
//               New Customer
//             </button>
//             <button
//               onClick={() => handleOptionChange('existing')}
//               className="flex-1 text-center py-2 rounded-full text-white relative z-10"
//             >
//               Existing Customer
//             </button>
//             <div
//               className={`absolute top-0 bottom-0 bg-teal-500 rounded-full transition-transform duration-300 ease-in-out z-0 ${
//                 selectedOption === 'new' ? 'left-0 w-1/2' : 'left-1/2 w-1/2'
//               }`}
//             ></div>
//           </div>
//         </div>

//         {selectedOption === 'new' ? (
//           <div>
//             <div className="mb-4">
//               <input
//                 type="text"
//                 placeholder="Username/email"
//                 className="w-full px-4 py-3 border rounded bg-gray-100 mt-1 placeholder-gray-500"
//               />
//             </div>
//             <div className="mb-4 relative">
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="w-full px-4 py-3 border rounded bg-gray-100 mt-1 placeholder-gray-500"
//               />
//               <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
//                 <i className="fas fa-eye"></i>
//               </div>
//             </div>
//           </div>
//         ) : (
//           <div>
//             <div className="mb-4">
//               <input
//                 type="text"
//                 placeholder="Username/email"
//                 className="w-full px-4 py-3 border rounded bg-gray-100 mt-1 placeholder-gray-500"
//               />
//             </div>
//             <div className="mb-4 relative">
//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="w-full px-4 py-3 border rounded bg-gray-100 mt-1 placeholder-gray-500"
//               />
//               <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
//                 <i className="fas fa-eye"></i>
//               </div>
//             </div>
//           </div>
//         )}

//         <a href="#" className="text-red-600 text-sm mb-4 block">Forgot Password?</a>

//         <button className="w-full bg-gray-700 text-white py-2 rounded mb-4">Log In</button>

//         <div className="flex justify-center items-center mb-4">
//           <div className="flex-shrink-0 w-8 h-8 bg-gray-200 rounded-full flex justify-center items-center">
//             <i className="fas fa-fingerprint text-gray-500"></i>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Auth;









