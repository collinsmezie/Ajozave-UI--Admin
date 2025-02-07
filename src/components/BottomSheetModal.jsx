// import React from "react";
// import { FiX } from "react-icons/fi";

// const CustomModal = ({ isVisible, onClose }) => {
//   if (!isVisible) return null;

//   return (
//     <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
//       <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center relative">
//         <button onClick={onClose} className="absolute top-3 right-3 text-gray-400 hover:text-gray-600">
//           <FiX size={20} />
//         </button>

//         <div className="flex justify-center mb-4">
//           <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
//             <span className="text-white text-xl">🤖</span>
//           </div>
//         </div>

//         <h3 className="text-lg font-semibold text-gray-700">Get More Tokens or Rewards!</h3>
//         <p className="text-gray-600 mt-2">Use AZCoiner AI to maximize your rewards.</p>

//         <button
//           onClick={onClose}
//           className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CustomModal;










import { React, useEffect } from 'react';

const BottomSheetModal = ({ isOpen, onClose, children }) => {

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      document.body.style.overflow = ''; // Restore scrolling
    }

    return () => {
      document.body.style.overflow = ''; // Cleanup when unmounting
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 flex items-end justify-center bg-black bg-opacity-50 transition-opacity ${
        isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      onClick={onClose}
    >
      {/* Modal Content */}
      <div
        className={`bg-white rounded-t-2xl p-5 shadow-lg transition-transform 
          ${isOpen ? 'translate-y-0' : 'translate-y-full'}
        `}
        style={{
          maxHeight: '90vh', // Prevents overflow
          width: '100vw', // Ensures full width on mobile
          maxWidth: '383px', // Adjusted for better fit on desktop mobile view
          paddingBottom: '50px', // Prevents overlap with bottom nav
          marginBottom: '54px', // Extra margin to keep it visible
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button className="w-full text-right text-gray-500" onClick={onClose}>
          ✖
        </button>

        {/* Modal Content */}
        <div className="overflow-auto max-h-[75vh]">{children}</div>
      </div>
    </div>
  );
};

export default BottomSheetModal;
