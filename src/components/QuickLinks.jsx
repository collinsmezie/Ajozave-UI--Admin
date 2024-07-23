// src/components/QuickLinks.js
import React from 'react';

const QuickLinks = () => {
  const links = [
    { name: 'Send Money', icon: 'fas fa-money-bill-alt' },
    { name: 'Airtime& Data', icon: 'fas fa-mobile-alt' },
    { name: 'Bill Payment', icon: 'fas fa-file-invoice-dollar' },
    { name: 'FX Swap', icon: 'fas fa-exchange-alt' }
  ];

  return (
    <div className="mt-4 mx-2">
      <div className="mb-5">
        <span className="text-gray-500 mx-4 font-semibold">Quick Links</span>
      </div>
      <div className="bg-white rounded-lg mb-8">
        {/* <div className="bg-white p-4 rounded-lg"> */}
        <div className="flex justify-between">
          {links.map((link, index) => (
            <div key={index} className="flex flex-col items-center space-y-2 w-1/4">
              {/* <div className="border border-gray-300 rounded-full w-12 h-12 flex items-center justify-center">
                <i className={`${link.icon} ${index === 0 ? 'text-sky-500' : index === 1 ? 'text-amber-500' : index === 2 ? 'text-pink-400' : 'text-teal-400'} text-2xl`}></i>
              </div> */}
              <div className="border border-gray-300 rounded-full w-12 h-12 flex items-center justify-center">
                <i className={`${link.icon} ${index === 0 ? 'text-red-400' : index === 1 ? 'text-red-400' : index === 2 ? 'text-red-400' : 'text-red-400'} text-2xl`}></i>
              </div>
              <span className="text-gray-600 text-xs text-center font-semibold">
                {link.name.split(' ').map((word, idx) => (
                  <div key={idx}>{word}</div>
                ))}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickLinks;
