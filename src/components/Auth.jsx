import React, { useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faFacebook } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from 'react-router-dom';

const Auth = () => {
  const [selectedOption, setSelectedOption] = useState('new');
  const [isExistingCustomer, setIsExistingCustomer] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [RegisterLoading, setRegisterLoading] = useState(false);
  const { loginWithRedirect } = useAuth0();
  const navigate = useNavigate();

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleInputChange = (e, setState) => {
    setState(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const validateSignUpInputs = () => {
    if (!fullName) {
      setErrorMessage("Full Name is required.");
      return false;
    }
    if (!email || !password) {
      setErrorMessage("Email and password are required.");
      return false;
    }
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return false;
    }
    return true;
  };

  const validateLoginInputs = () => {
    if (!email || !password) {
      setErrorMessage("Email and password are required.");
      return false;
    }
    return true;
  };

  const register = async () => {
    setErrorMessage("");
    if (!validateSignUpInputs()) return;

    setRegisterLoading(true);
    try {
      const response = await fetch('https://ajozave-api.onrender.com/admin/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Registration failed.');
      }

      setIsExistingCustomer(true);
      setFullName('');
      setEmail('');
      setPassword('');
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setRegisterLoading(false); // Stop loading after the request is done
    }
  };

  const login = async () => {
    setErrorMessage('');
    if (!validateLoginInputs()) return;

    setLoginLoading(true); // Set loading to true when starting
    try {
      const response = await fetch('https://ajozave-api.onrender.com/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Login failed.');
      }

      const data = await response.json();
      if (data.token) {
        localStorage.setItem('jwtToken', data.token);
        navigate('/dashboard');
      } else {
        throw new Error('JWT token not found.');
      }
    } catch (error) {
      setErrorMessage(error.message);
    } finally {
      setLoginLoading(false); // Stop loading after the request is done
    }
  };

  return (
    <div className="w-full max-w-sm p-6 bg-white">

      <div className="text-2xl font-bold text-center text-gray-600 mb-6 font-bold text-red-600">Ajo<span className="text-gray-400">Zave</span></div>
      {/* <h1 className="text-2xl font-bold text-center text-gray-600 mb-2">Hello There</h1> */}

      <h2 className="text-lg font-semibold text-center mb-8">Let's get you started</h2>

      <div className="flex mb-12 border rounded-full">
        <div
          onClick={() => setIsExistingCustomer(false)}
          className={`flex-1 py-2 text-center cursor-pointer rounded-full ${!isExistingCustomer ? 'bg-red-500 text-white text-sm' : 'text-gray-600 text-sm'}`}
        >
          New Customer
        </div>
        <div
          onClick={() => setIsExistingCustomer(true)}
          className={`flex-1 py-2 text-center cursor-pointer rounded-full ${isExistingCustomer ? 'bg-red-500 text-white text-sm' : 'text-gray-600 text-sm'}`}
        >
          Existing Customer
        </div>
      </div>

      {!isExistingCustomer && (
        <>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => handleInputChange(e, setFullName)}
              placeholder="Enter your full name"
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
        </>
      )}

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => handleInputChange(e, setEmail)}
          placeholder="Enter email address"
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
      </div>

      <div className="mb-4 relative">
        <label className="block text-gray-700 mb-2">Password</label>
        <input
          type={isPasswordVisible ? 'text' : 'password'}
          value={password}
          onChange={(e) => handleInputChange(e, setPassword)}
          placeholder="Enter password"
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
        <button
          type="button"
          className="absolute right-3 top-10"
          onClick={togglePasswordVisibility}
        >
          <i className={`fas ${isPasswordVisible ? 'fa-eye-slash' : 'fa-eye'} text-l text-gray-400`}></i>
        </button>
      </div>

      {errorMessage && (
        <div className="text-red-500 text-sm mb-4">{errorMessage}</div>
      )}

      {!isExistingCustomer ? (
        <button
          className="w-full py-3 border border-gray-300 text-black rounded-lg mb-4 bg-red-500 text-white hover:bg-red-600 transition duration-300 flex items-center justify-center"
          onClick={register}
          disabled={RegisterLoading} // Disable button when loading
        >
          {RegisterLoading ? (
            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
          ) : (
            "Register"
          )}
        </button>
      ) : (
        <button
          className="w-full py-3 border border-gray-300 text-black rounded-lg mb-4 bg-red-500 text-white hover:bg-red-600 transition duration-300 flex items-center justify-center"
          onClick={login}
          disabled={loginLoading} // Disable button when loading
        >
          {loginLoading ? (
            <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
          ) : (
            "Log In"
          )}
        </button>
      )}

      <button className="text-sm text-gray-600 mb-4">Forgot Password?</button>

      {/* OR separator */}
      <div className="flex items-center my-4">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="mx-4 text-gray-500 text-sm">OR</span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>

      {/* Google and Facebook buttons */}
      <div className="flex space-x-2">
        {/* Google button */}
        <button
          className="flex-1 py-3 border border-gray-300 text-gray-600 rounded-lg flex items-center justify-center hover:bg-gray-100 transition duration-300"
          onClick={() => loginWithRedirect({ connection: 'google' })}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="w-5 h-5 mr-2"
          >
            <path fill="#4285F4" d="M24 9.5c3.28 0 6.19 1.14 8.5 3.02l6.31-6.31C34.7 3.13 29.7 1 24 1 14.95 1 7.44 6.83 4.27 14.99l7.78 6.07C13.44 13.35 18.32 9.5 24 9.5z" />
            <path fill="#34A853" d="M24 44.5c5.66 0 10.43-1.89 13.9-5.12l-6.56-5.36c-1.79 1.22-4.13 2.07-7.34 2.07-5.7 0-10.5-3.88-12.22-9.06l-7.77 6.04C7.56 39.99 15.31 44.5 24 44.5z" />
            <path fill="#FBBC05" d="M44.5 24.5c0-1.59-.16-3.12-.46-4.59H24v9.09h11.67c-.51 2.58-1.97 4.74-3.93 6.15l6.56 5.36c3.81-3.52 6.2-8.73 6.2-15.01z" />
            <path fill="#EA4335" d="M11.05 28.03C10.62 26.45 10.39 24.76 10.39 23c0-1.76.24-3.45.66-5.03l-7.78-6.07C1.14 15.54 0 19.17 0 23c0 3.83 1.14 7.46 3.28 10.1l7.77-6.07z" />
          </svg>
          Google
        </button>

        {/* Facebook button */}
        <button
          className="flex-1 py-3 border border-gray-300 text-gray-600 rounded-lg flex items-center justify-center hover:bg-gray-100 transition duration-300"
          onClick={() => loginWithRedirect({ connection: 'facebook' })}
        >
          <FontAwesomeIcon icon={faFacebook} className="text-blue-600 mr-2" />
          Facebook
        </button>
      </div>
    </div>
  );
};

export default Auth;
