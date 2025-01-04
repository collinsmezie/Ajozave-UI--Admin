// import React, { useEffect } from 'react';

// const ContributorsDashboard = () => {

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-100">
//       {/* Header Section */}
//       <header className="bg-gradient-to-r from-purple-500 to-purple-700 text-white p-6 rounded-b-3xl shadow-md">
//         <div className="flex justify-between items-center">
//           <button className="text-white text-2xl font-semibold">&#x2190;</button>
//           <div className="w-10 h-10 rounded-full bg-gray-200 border border-gray-300 overflow-hidden">
//             {/* <img src="https://via.placeholder.com/40" alt="User" className="w-full h-full object-cover" /> */}
//             <img
//             src={`https://api.dicebear.com/5.x/avataaars/svg?seed=Username`}
//             alt="User Avatar"
//             className="w-10 h-10 rounded-full border-2 border-blue-300"
//           />
//           </div>
//         </div>
//         <div className="mt-8">
//           <p className="text-sm font-light">Balance</p>
//           <h1 className="text-3xl font-bold">$18,240</h1>
//           <p className="text-sm font-light mt-2">**** **** **** 1269</p>
//         </div>
//       </header>

//       {/* Services Section */}
//       <section className="mt-6 px-4">
//         <h2 className="text-sm font-semibold text-gray-600 mb-3">Services</h2>
//         <div className="grid grid-cols-4 gap-4">
//           <ServiceIcon title="Send" />
//           <ServiceIcon title="Request" />
//           <ServiceIcon title="Recharge" />
//           <ServiceIcon title="Payment" />
//         </div>
//       </section>

//       {/* Offers Section */}
//       <section className="mt-8 px-4">
//         <h2 className="text-sm font-semibold text-gray-600 mb-3">Offers</h2>
//         <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
//           <OfferCard image="https://via.placeholder.com/120x60" alt="Summer Sale" />
//           <OfferCard image="https://via.placeholder.com/120x60" alt="Salad" />
//         </div>
//       </section>

//       {/* Shopping Section */}
//       <section className="mt-8 px-4">
//         <h2 className="text-sm font-semibold text-gray-600 mb-3">Shopping</h2>
//         <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
//           <OfferCard image="https://via.placeholder.com/120x60" alt="Walmart" />
//           <OfferCard image="https://via.placeholder.com/120x60" alt="Amazon" />
//         </div>
//       </section>
//     </div>
//   );
// };

// const ServiceIcon = ({ title }) => (
//   <div className="flex flex-col items-center">
//     <div className="w-12 h-12 bg-purple-100 text-purple-600 flex items-center justify-center rounded-full shadow-sm">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth="1.5"
//         stroke="currentColor"
//         className="w-6 h-6"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M12 3v18m9-9H3"
//         />
//       </svg>
//     </div>
//     <p className="text-xs text-gray-600 mt-2">{title}</p>
//   </div>
// );

// const OfferCard = ({ image, alt }) => (
//   <div className="w-32 h-16 rounded-xl overflow-hidden shadow-sm bg-white">
//     <img src={image} alt={alt} className="w-full h-full object-cover" />
//   </div>
// );

// export default ContributorsDashboard;







import React, { useEffect, useState } from "react";
import banner1 from "../assets/banner1.webp";
import banner4 from "../assets/banner4.webp";
import banner5 from "../assets/banner5.webp";
import banner6 from "../assets/banner6.webp";
import { useNavigate, useLocation } from "react-router-dom";

import {
  PaperAirplaneIcon,
  CurrencyDollarIcon,
  BoltIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline"; // Importing Heroicons


const ContributorsDashboard = () => {
  // const [activeDashboard, setActiveDashboard] = useState("Contributor");

  const navigate = useNavigate();
  const location = useLocation();

  // Determine active dashboard based on current path
  const activeDashboard =
    location.pathname === "/contributors-dashboard"
      ? "Contributor"
      : "Collector";


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-purple-500 to-purple-700 text-white p-6 rounded-b-3xl shadow-md">
        <div className="flex justify-between items-center">
          <button className="text-white text-2xl font-semibold">&#x2190;</button>

          {/* Toggle Tab */}
          {/* <div className="flex items-center justify-center flex-1">
            <div className="flex items-center bg-gray-200 rounded-full p-0.5">
              <button
                className={`px-3 py-0.5 text-sm rounded-full ${
                  activeDashboard === "Contributor"
                    ? "bg-purple-600 text-white"
                    : "text-gray-700"
                }`}
                onClick={() => navigate("/contributors-dashboard")}              >
                Contributor
              </button>
              <button
                className={`px-3 py-0.5 text-sm rounded-full ${
                  activeDashboard === "Collector"
                    ? "bg-purple-600 text-white"
                    : "text-gray-700"
                }`}
                onClick={() => navigate("/dashboard")}              >
                Collector
              </button>
            </div>
          </div> */}

          {/* Toggle Tab */}
          <div className="flex items-center justify-center flex-1">
            <div className="flex items-center bg-gray-200 rounded-full p-0.5 shadow-sm">
              <button
                className={`px-4 py-1 text-sm rounded-full font-medium transition-all ${activeDashboard === "Contributor"
                  ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-md"
                  : "text-gray-700 hover:text-purple-600"
                  }`}
                onClick={() => navigate("/contributors-dashboard")}
              >
                Contributor
              </button>
              <button
                className={`px-4 py-1 text-sm rounded-full font-medium transition-all ${activeDashboard === "Collector"
                  ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-md"
                  : "text-gray-700 hover:text-purple-600"
                  }`}
                onClick={() => navigate("/dashboard")}
              >
                Collector
              </button>
            </div>
          </div>

          <div className="w-10 h-10 rounded-full bg-gray-200 border border-gray-300 overflow-hidden">
            <img
              src={`https://api.dicebear.com/5.x/avataaars/svg?seed=User123`}
              alt="User Avatar"
              className="w-10 h-10 rounded-full border-2 border-blue-300"
            />
          </div>
        </div>
        <div className="mt-8">
          <p className="text-sm font-light">Balance</p>
          <h1 className="text-3xl font-bold">$18,240</h1>
          <p className="text-sm font-light mt-2">**** **** **** 1269</p>
        </div>
      </header>

      {/* Services Section */}
      <section className="mt-6 px-4">
        <h2 className="text-sm font-semibold text-gray-600 mb-3">Services</h2>
        <div className="grid grid-cols-4 gap-4">
          <ServiceIcon title="Send" Icon={PaperAirplaneIcon} />
          <ServiceIcon title="Request" Icon={CurrencyDollarIcon} />
          <ServiceIcon title="Recharge" Icon={BoltIcon} />
          <ServiceIcon title="Payment" Icon={CreditCardIcon} />
        </div>
      </section>

      {/* Offers Section */}
      <section className="mt-8 px-4">
        <h2 className="text-sm font-semibold text-gray-600 mb-3">Offers</h2>
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
          <OfferCard image={banner1} alt="Summer Sale" />
          <OfferCard image={banner4} alt="Summer Offers" />
        </div>
      </section>

      {/* Shopping Section */}
      <section className="mt-8 px-4">
        <h2 className="text-sm font-semibold text-gray-600 mb-3">Shopping</h2>
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
          <OfferCard image={banner5} alt="Summer Sale" />
          <OfferCard image={banner6} alt="Black Friday" />
        </div>
      </section>
    </div>
  );
};

const ServiceIcon = ({ title, Icon }) => (
  <div className="flex flex-col items-center">
    <div className="w-12 h-12 bg-purple-100 text-purple-600 flex items-center justify-center rounded-full shadow-sm">
      <Icon className="w-6 h-6" />
    </div>
    <p className="text-xs text-gray-600 mt-2">{title}</p>
  </div>
);

const OfferCard = ({ image, alt }) => (
  <div className="w-40 h-24 rounded-xl overflow-hidden shadow-sm bg-white">
    <img src={image} alt={alt} className="w-full h-full object-cover" />
  </div>
);

export default ContributorsDashboard;
