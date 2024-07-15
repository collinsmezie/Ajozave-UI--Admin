import React from 'react';

const Auth = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-4">
        <h1 className="text-2xl font-semibold mb-4">Welcome</h1>
        <h2 className="text-xl font-semibold mb-4">Login to your account</h2>

        <div className="flex justify-between mb-4">
          <button className="px-4 py-2 bg-teal-500 text-white rounded-md">Personal Banking</button>
          <button className="text-red-500">Create Account</button>
        </div>

        <div className="bg-white p-4 rounded-md shadow-md mb-4">
          <label className="block text-gray-700">Username/email</label>
          <input type="text" placeholder="Enter username" className="w-full p-2 border rounded-md mb-4" />

          <label className="block text-gray-700">Password</label>
          <div className="flex items-center border rounded-md">
            <input type="password" placeholder="Enter password" className="w-full p-2" />
            <button className="p-2">
              <svg className="w-5 h-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12H9m3 0V8m0 4v4m4-4a4 4 0 10-8 0 4 4 0 008 0z" />
              </svg>
            </button>
          </div>
        </div>

        <button className="text-red-500 mb-4">Forgot Password?</button>

        <button className="w-full p-2 bg-gray-800 text-white rounded-md">Log In</button>

        <div className="flex justify-between mt-4">
          <button className="p-2 bg-gray-200 rounded-full">
            <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
          <button className="p-2 bg-gray-200 rounded-full">
            <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
          <button className="p-2 bg-gray-200 rounded-full">
            <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 11l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;

