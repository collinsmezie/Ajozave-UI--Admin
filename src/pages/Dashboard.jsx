// import React, { useState, useEffect } from "react";
// import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import { useSwipeable } from "react-swipeable";
// import { FaHeadset } from "react-icons/fa";
// import StatsTab from "../components/StatsTab";
// import SessionsTab from "../components/SessionsTab";
// import GoalsTab from "../components/GoalsTab";
// import MembersTab from "../components/MembersTab";
// import { BellIcon } from "@heroicons/react/24/outline";
// import { useNavigate, useLocation } from "react-router-dom";

// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState("Stats");
//   const [previousTab, setPreviousTab] = useState("Stats");

//   const navigate = useNavigate();
//   const location = useLocation();

//   // Determine active dashboard based on current path
//   const activeDashboard =
//     location.pathname === "/contributors-dashboard"
//       ? "Contributor"
//       : "Collector";

//   const totalContributions = 0;
//   const remainingPayments = 0;
//   const percentagePaymentsMade =
//     totalContributions > 0
//       ? ((totalContributions - remainingPayments) / totalContributions) * 100
//       : 0;

//   const tabOrder = ["Stats", "Sessions", "Goals", "Members"];

//   const getAnimationClass = () => {
//     const currentIndex = tabOrder.indexOf(activeTab);
//     const previousIndex = tabOrder.indexOf(previousTab);

//     if (currentIndex > previousIndex) {
//       return "animate-slide-in-right";
//     } else if (currentIndex < previousIndex) {
//       return "animate-slide-in-left";
//     }
//     return "";
//   };

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const handleSwipe = (direction) => {
//     const currentIndex = tabOrder.indexOf(activeTab);

//     if (direction === "LEFT" && currentIndex < tabOrder.length - 1) {
//       setPreviousTab(activeTab);
//       setActiveTab(tabOrder[currentIndex + 1]);
//     }
//     if (direction === "RIGHT" && currentIndex > 0) {
//       setPreviousTab(activeTab);
//       setActiveTab(tabOrder[currentIndex - 1]);
//     }
//   };

//   const swipeHandlers = useSwipeable({
//     onSwipedLeft: () => handleSwipe("LEFT"),
//     onSwipedRight: () => handleSwipe("RIGHT"),
//     trackMouse: true,
//   });

//   const fetchUserName = () => {
//     const fullName = localStorage.getItem("username");
//     return fullName ? fullName.split(" ")[0] : "User";
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-purple-50">

//       {/* Progress Section */}
//       <div className="bg-purple-600 rounded-b-3xl p-6 text-white shadow-lg">
//         <div className="flex items-center justify-between">
//           {/* Back Arrow */}
//           <button className="text-white text-2xl font-semibold flex-shrink-0 hover:opacity-80 transition-opacity">
//             &#x2190;
//           </button>

//           {/* Toggle Tab */}
//           <div className="flex items-center justify-center flex-1">
//             <div className="flex items-center bg-gray-200 rounded-full p-1 shadow-sm">
//               <button
//                 className={`px-4 py-1 text-sm rounded-full font-medium transition-all ${activeDashboard === "Contributor"
//                     ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-md"
//                     : "text-gray-700 hover:text-purple-600"
//                   }`}
//                 onClick={() => navigate("/contributors-dashboard")}
//               >
//                 Contributor
//               </button>
//               <button
//                 className={`px-4 py-1 text-sm rounded-full font-medium transition-all ${activeDashboard === "Collector"
//                     ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-md"
//                     : "text-gray-700 hover:text-purple-600"
//                   }`}
//                 onClick={() => navigate("/dashboard")}
//               >
//                 Collector
//               </button>
//             </div>
//           </div>

//           {/* Profile Avatar */}
//           <div className="flex-shrink-0">
//             <img
//               src={`https://api.dicebear.com/5.x/avataaars/svg?seed=Username`}
//               alt="User Avatar"
//               className="w-10 h-10 rounded-full border-2 border-purple-300 shadow-md hover:scale-105 transition-transform"
//             />
//           </div>
//         </div>

//         <div className="mt-6 flex items-center justify-between">
//           <div className="relative w-32 h-32">
//             <CircularProgressbar
//               value={percentagePaymentsMade}
//               text={`${percentagePaymentsMade.toFixed(0)}%`}
//               strokeWidth={12}
//               styles={{
//                 path: { stroke: "url(#gradient)", strokeLinecap: "round" },
//                 trail: { stroke: "rgba(255,255,255,0.3)" },
//                 text: {
//                   fill: "#fff",
//                   fontSize: "24px",
//                   fontWeight: "bold",
//                   fontFamily: "sans-serif",
//                 },
//               }}
//             />
//             {/* Gradient for CircularProgressbar */}
//             <svg>
//               <defs>
//                 <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                   <stop offset="0%" stopColor="#8e44ad" />
//                   <stop offset="100%" stopColor="#3498db" />
//                 </linearGradient>
//               </defs>
//             </svg>
//           </div>

//           <div className="text-right">
//             <p className="text-xs font-light tracking-wide text-gray-200">TOTAL CONTRIBUTIONS</p>
//             <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">₦0.00</h3>
//             <p className="text-xs font-light tracking-wide text-gray-200 mt-4">REMAINING PAYMENTS</p>
//             <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">₦0.00</h3>
//           </div>
//         </div>
//       </div>

//       {/* Tab Navigation */}
//       <div className="bg-white py-3 px-4 flex justify-around">
//         {tabOrder.map((tab) => (
//           <button
//             key={tab}
//             className={`pb-2 ${activeTab === tab
//               ? "text-purple-600 border-b-2 border-purple-600"
//               : "text-gray-600"
//               }`}
//             onClick={() => {
//               setPreviousTab(activeTab);
//               setActiveTab(tab);
//             }}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Tab Content */}
//       <div {...swipeHandlers} className="flex-grow p-4">
//         <div className={`transition-all duration-500 ${getAnimationClass()}`}>
//           {activeTab === "Stats" && <StatsTab />}
//           {activeTab === "Sessions" && <SessionsTab />}
//           {activeTab === "Goals" && <GoalsTab />}
//           {activeTab === "Members" && <MembersTab />}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;























// import React, { useState, useEffect } from "react";
// import { CircularProgressbar } from "react-circular-progressbar";
// import "react-circular-progressbar/dist/styles.css";
// import { useNavigate, useLocation } from "react-router-dom";
// import StatsTab from "../components/StatsTab";
// import SessionsTab from "../components/SessionsTab";
// import GoalsTab from "../components/GoalsTab";
// import MembersTab from "../components/MembersTab";

// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState("Stats");

//   const navigate = useNavigate();
//   const location = useLocation();

//   // Determine active dashboard based on current path
//   const activeDashboard =
//     location.pathname === "/contributors-dashboard"
//       ? "Contributor"
//       : "Collector";

//   const totalContributions = 0;
//   const remainingPayments = 0;
//   const percentagePaymentsMade =
//     totalContributions > 0
//       ? ((totalContributions - remainingPayments) / totalContributions) * 100
//       : 0;

//   const fetchUserName = () => {
//     const fullName = localStorage.getItem("username");
//     return fullName ? fullName.split(" ")[0] : "User";
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-purple-50">

//       {/* Progress Section */}
//       <div className="bg-purple-600 rounded-b-3xl p-6 text-white shadow-lg">
//         <div className="flex items-center justify-between">
//           {/* Back Arrow */}
//           <button className="text-white text-2xl font-semibold flex-shrink-0 hover:opacity-80 transition-opacity">
//             &#x2190;
//           </button>

//           {/* Toggle Tab */}
//           <div className="flex items-center justify-center flex-1">
//             <div className="flex items-center bg-gray-200 rounded-full p-1 shadow-sm">
//               <button
//                 className={`px-4 py-1 text-sm rounded-full font-medium transition-all ${activeDashboard === "Contributor"
//                     ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-md"
//                     : "text-gray-700 hover:text-purple-600"
//                   }`}
//                 onClick={() => navigate("/contributors-dashboard")}
//               >
//                 Contributor
//               </button>
//               <button
//                 className={`px-4 py-1 text-sm rounded-full font-medium transition-all ${activeDashboard === "Collector"
//                     ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-md"
//                     : "text-gray-700 hover:text-purple-600"
//                   }`}
//                 onClick={() => navigate("/dashboard")}
//               >
//                 Collector
//               </button>
//             </div>
//           </div>

//           {/* Profile Avatar */}
//           <div className="flex-shrink-0">
//             <img
//               src={`https://api.dicebear.com/5.x/avataaars/svg?seed=Username`}
//               alt="User Avatar"
//               className="w-10 h-10 rounded-full border-2 border-purple-300 shadow-md hover:scale-105 transition-transform"
//             />
//           </div>
//         </div>

//         <div className="mt-6 flex items-center justify-between">
//           <div className="relative w-32 h-32">
//             <CircularProgressbar
//               value={percentagePaymentsMade}
//               text={`${percentagePaymentsMade.toFixed(0)}%`}
//               strokeWidth={12}
//               styles={{
//                 path: { stroke: "url(#gradient)", strokeLinecap: "round" },
//                 trail: { stroke: "rgba(255,255,255,0.3)" },
//                 text: {
//                   fill: "#fff",
//                   fontSize: "24px",
//                   fontWeight: "bold",
//                   fontFamily: "sans-serif",
//                 },
//               }}
//             />
//             {/* Gradient for CircularProgressbar */}
//             <svg>
//               <defs>
//                 <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                   <stop offset="0%" stopColor="#8e44ad" />
//                   <stop offset="100%" stopColor="#3498db" />
//                 </linearGradient>
//               </defs>
//             </svg>
//           </div>

//           <div className="text-right">
//             <p className="text-xs font-light tracking-wide text-gray-200">TOTAL CONTRIBUTIONS</p>
//             <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">₦0.00</h3>
//             <p className="text-xs font-light tracking-wide text-gray-200 mt-4">REMAINING PAYMENTS</p>
//             <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">₦0.00</h3>
//           </div>
//         </div>
//       </div>

//       {/* Tab Navigation */}
//       <div className="bg-white py-3 px-4 flex justify-around">
//         {["Stats", "Sessions", "Goals", "Members"].map((tab) => (
//           <button
//             key={tab}
//             className={`pb-2 ${activeTab === tab
//               ? "text-purple-600 border-b-2 border-purple-600"
//               : "text-gray-600"
//               }`}
//             onClick={() => setActiveTab(tab)}
//           >
//             {tab}
//           </button>
//         ))}
//       </div>

//       {/* Tab Content */}
//       <div className="flex-grow p-4">
//         {activeTab === "Stats" && <StatsTab />}
//         {activeTab === "Sessions" && <SessionsTab />}
//         {activeTab === "Goals" && <GoalsTab />}
//         {activeTab === "Members" && <MembersTab />}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;













import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useNavigate, useLocation } from "react-router-dom";
import StatsTab from "../components/StatsTab";
import SessionsTab from "../components/SessionsTab";
import GoalsTab from "../components/GoalsTab";
import MembersTab from "../components/MembersTab";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Stats");

  const navigate = useNavigate();
  const location = useLocation();

  // Determine active dashboard based on current path
  const activeDashboard =
    location.pathname === "/contributors-dashboard"
      ? "Contributor"
      : "Collector";

  const totalContributions = 0;
  const remainingPayments = 0;
  const percentagePaymentsMade =
    totalContributions > 0
      ? ((totalContributions - remainingPayments) / totalContributions) * 100
      : 0;

  return (
    <div className="flex flex-col min-h-screen bg-purple-50">

      {/* Progress Section */}
      <div className="bg-gradient-to-r from-purple-500 to-purple-700 rounded-b-3xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between mb-6">
          {/* Back Arrow */}
          <button
            className="text-white text-2xl font-semibold flex-shrink-0 hover:opacity-80 transition-opacity"
            onClick={() => navigate(-1)} // Navigate back to the previous page
          >
            &#x2190;
          </button>

          {/* Toggle Tab */}
          <div className="flex items-center justify-center flex-1">
            <div className="flex items-center bg-gray-200 rounded-full p-0.4 shadow-sm">
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

          {/* Profile Avatar */}
          {/* <div className="flex-shrink-0">
            <img
              src={`https://api.dicebear.com/5.x/avataaars/svg?seed=Username`}
              alt="User Avatar"
              className="w-10 h-10 rounded-full border-2 border-purple-300 shadow-md hover:scale-105 transition-transform"
            />
          </div> */}

          {/* Profile Avatar */}
          <div className="w-8 h-8 rounded-full bg-gray-200 border border-gray-300 overflow-hidden">
            <img
              src={`https://api.dicebear.com/5.x/avataaars/svg?seed=User123`}
              alt="User Avatar"
              className="w-10 h-10 rounded-full border-2 border-blue-300"
            />
          </div>
        </div>

        <div className="mt-5 flex items-center justify-around">
          {/* Progress Circle */}
          <div className="relative w-24 h-24">
            <CircularProgressbar
              value={percentagePaymentsMade}
              text={`${percentagePaymentsMade.toFixed(0)}%`}
              strokeWidth={10}
              styles={{
                path: { stroke: "url(#gradient)", strokeLinecap: "round" },
                trail: { stroke: "rgba(255,255,255,0.3)" },
                text: {
                  fill: "#fff",
                  fontSize: "29px",
                  fontWeight: "bold",
                  fontFamily: "sans-serif",
                },
              }}
            />
            {/* Gradient for CircularProgressbar */}
            <svg>
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#fff" />
                  <stop offset="100%" stopColor="#fff" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="text-right">
            <p className="text-[10px] font-light tracking-wide text-gray-200">TOTAL CONTRIBUTIONS</p>
            <h3 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">₦0.00</h3>
            <p className="text-[10px] font-light tracking-wide text-gray-200 mt-2">REMAINING PAYMENTS</p>
            <h3 className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">₦0.00</h3>
          </div>
        </div>

      </div>

      {/* Tab Navigation */}
      <div className="py-3 px-4 flex justify-around">
        {["Stats", "Sessions", "Goals", "Members"].map((tab) => (
          <button
            key={tab}
            className={`pb-2 ${activeTab === tab
              ? "text-purple-600 border-b-2 border-purple-600"
              : "text-gray-600"
              }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="flex-grow p-4">
        {activeTab === "Stats" && <StatsTab />}
        {activeTab === "Sessions" && <SessionsTab />}
        {activeTab === "Goals" && <GoalsTab />}
        {activeTab === "Members" && <MembersTab />}
      </div>
    </div>
  );
};

export default Dashboard;
