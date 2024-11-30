import React, { useEffect } from 'react';

const ComingSoon = () => {
  useEffect(() => {
    // Scroll to the bottom of the page when the component mounts
    window.scrollTo(0, document.body.scrollHeight);

    // Disable scroll after scrolling down
    const timer = setTimeout(() => {
      document.body.style.overflow = 'hidden';
    }, 300); // 300ms delay to allow scroll before disabling

    // Cleanup on component unmount
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-center px-4">
      <div className="bg-purple-100 p-6 rounded-full mb-6 shadow-md">
        <svg
          className="w-12 h-12 text-purple-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1 4h.01M12 9h.01M21 12c0-4.97-4.03-9-9-9S3 7.03 3 12s4.03 9 9 9 9-4.03 9-9z"
          ></path>
        </svg>
      </div>
      <h2 className="text-2xl font-semibold text-gray-700">Feature Coming Soon</h2>
      <p className="text-gray-500 mt-3">
        We're working hard to bring this feature to you soon!
      </p>
    </div>
  );
};

export default ComingSoon;
