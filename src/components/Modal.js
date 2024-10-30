import React from 'react';

const Modal = ({ title, message, onClose, onAction, actionLabel }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <p className="text-gray-600 mt-2">{message}</p>
        <button
          onClick={onAction}
          className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          {actionLabel}
        </button>
      </div>
    </div>
  );
};

export default Modal;
