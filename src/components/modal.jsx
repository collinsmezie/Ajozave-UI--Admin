// import React from 'react';

// const Modal = ({ showModal, modalContent, onClose, onConfirm }) => {

//   console.log("modal content", modalContent)

//   // if (!showModal || !modalContent) return null;

//   return (
//     <>
//       {/* <style>{`body { overflow: hidden; }`}</style> */}
//       <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
//         <div
//           className="absolute top-1/2 left-1/2 bg-white p-4 rounded-lg shadow-md text-center w-80 max-w-sm mx-4 sm:max-w-md"
//           style={{
//             position: 'absolute',
//             top: "40%", // Adjust this for vertical position
//             left: "46%", // Adjust this for horizontal position
//             transform: "translate(-50%, -50%)",
//           }}
//         >
//           <h2 className="text-base font-semibold text-gray-800">{modalContent.title}</h2>
//           <p className="mt-2 text-sm text-gray-600">{modalContent.message}</p>
//           <div className="flex justify-center mt-4 space-x-4">
//             <button
//               onClick={() => { setShowModal(false); handleCancelLongPress(); }}
//               className="px-3 py-1 bg-gray-300 text-gray-700 rounded-md text-sm hover:bg-gray-400"
//             >
//               Cancel
//             </button>
//             {modalContent.onConfirm && (
//               <button
//                 onClick={modalContent.onConfirm}
//                 className="px-3 py-1 bg-purple-600 text-white rounded-md text-sm hover:bg-purple-700"
//               >
//                 {modalContent.confirmText || "OK"}
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Modal;












// import React from 'react';
// import PropTypes from 'prop-types';

// const Modal = ({
//   isOpen,
//   title,
//   message,
//   onCancel,
//   onConfirm,
//   confirmText = "OK",
//   cancelText = "Cancel",
//   disableCancel = false,
// }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
//       <div className="bg-white p-4 rounded-lg shadow-md text-center w-80 max-w-sm mx-4 sm:max-w-md">
//         <h2 className="text-base font-semibold text-gray-800">{title}</h2>
//         <p className="mt-2 text-sm text-gray-600">{message}</p>
//         <div className="flex justify-center mt-4 space-x-4">
//           {!disableCancel && (
//             <button
//               onClick={onCancel}
//               className="px-3 py-1 bg-gray-300 text-gray-700 rounded-md text-sm hover:bg-gray-400"
//             >
//               {cancelText}
//             </button>
//           )}
//           {onConfirm && (
//             <button
//               onClick={onConfirm}
//               className="px-3 py-1 bg-purple-600 text-white rounded-md text-sm hover:bg-purple-700"
//             >
//               {confirmText}
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// Modal.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   title: PropTypes.string.isRequired,
//   message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
//   onCancel: PropTypes.func,
//   onConfirm: PropTypes.func,
//   confirmText: PropTypes.string,
//   cancelText: PropTypes.string,
//   disableCancel: PropTypes.bool,
// };

// export default Modal;















import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Modal = ({
  isOpen,
  title,
  message,
  onCancel,
  onConfirm,
  confirmText = "OK",
  cancelText = "Cancel",
  disableCancel = false,
}) => {
  if (!isOpen) return null;

  // Modal content
  const modalContent = (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md text-center w-80 max-w-sm mx-4 sm:max-w-md">
        <h2 className="text-base font-semibold text-gray-800">{title}</h2>
        <p className="mt-2 text-sm text-gray-600">{message}</p>
        <div className="flex justify-center mt-4 space-x-4">
          {!disableCancel && (
            <button
              onClick={onCancel}
              className="px-3 py-1 bg-gray-300 text-gray-700 rounded-md text-sm hover:bg-gray-400"
            >
              {cancelText}
            </button>
          )}
          {onConfirm && (
            <button
              onClick={onConfirm}
              className="px-3 py-1 bg-purple-600 text-white rounded-md text-sm hover:bg-purple-700"
            >
              {confirmText}
            </button>
          )}
        </div>
      </div>
    </div>
  );

  // Render the modal using ReactDOM.createPortal
  return ReactDOM.createPortal(modalContent, document.body);
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  confirmText: PropTypes.string,
  cancelText: PropTypes.string,
  disableCancel: PropTypes.bool,
};

export default Modal;
