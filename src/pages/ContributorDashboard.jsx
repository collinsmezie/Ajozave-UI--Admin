// import React, { useEffect, useState } from "react";
// import banner1 from "../assets/banner1.webp";
// import banner4 from "../assets/banner4.webp";
// import banner5 from "../assets/banner5.webp";
// import banner6 from "../assets/banner6.webp";
// import { useNavigate, useLocation } from "react-router-dom";

// import {
//   PaperAirplaneIcon,
//   CurrencyDollarIcon,
//   BoltIcon,
//   CreditCardIcon,
// } from "@heroicons/react/24/outline"; // Importing Heroicons


// const ContributorsDashboard = () => {
//   // const [activeDashboard, setActiveDashboard] = useState("Contributor");

//   const navigate = useNavigate();
//   const location = useLocation();

//   // Determine active dashboard based on current path
//   const activeDashboard =
//     location.pathname === "/contributors-dashboard"
//       ? "Contributor"
//       : "Collector";


//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-100">
//       {/* Header Section */}
//       <header className="bg-gradient-to-r from-purple-500 to-purple-700 text-white p-6 rounded-b-3xl shadow-md">
//         <div className="flex justify-between items-center">
//           <button className="text-white text-2xl font-semibold">&#x2190;</button>

//           {/* Toggle Tab */}
//           <div className="flex items-center justify-center flex-1">
//             <div className="flex items-center bg-gray-200 rounded-full p-0.5 shadow-sm">
//               <button
//                 className={`px-4 py-1 text-sm rounded-full font-medium transition-all ${activeDashboard === "Contributor"
//                   ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-md"
//                   : "text-gray-700 hover:text-purple-600"
//                   }`}
//                 onClick={() => navigate("/contributors-dashboard")}
//               >
//                 Contributor
//               </button>
//               <button
//                 className={`px-4 py-1 text-sm rounded-full font-medium transition-all ${activeDashboard === "Collector"
//                   ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-md"
//                   : "text-gray-700 hover:text-purple-600"
//                   }`}
//                 onClick={() => navigate("/dashboard")}
//               >
//                 Collector
//               </button>
//             </div>
//           </div>

//           <div className="w-10 h-10 rounded-full bg-gray-200 border border-gray-300 overflow-hidden">
//             <img
//               src={`https://api.dicebear.com/5.x/avataaars/svg?seed=User123`}
//               alt="User Avatar"
//               className="w-10 h-10 rounded-full border-2 border-blue-300"
//             />
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
//           <ServiceIcon title="Send" Icon={PaperAirplaneIcon} />
//           <ServiceIcon title="Request" Icon={CurrencyDollarIcon} />
//           <ServiceIcon title="Recharge" Icon={BoltIcon} />
//           <ServiceIcon title="Payment" Icon={CreditCardIcon} />
//         </div>
//       </section>

//       {/* Offers Section */}
//       <section className="mt-8 px-4">
//         <h2 className="text-sm font-semibold text-gray-600 mb-3">Offers</h2>
//         <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
//           <OfferCard image={banner1} alt="Summer Sale" />
//           <OfferCard image={banner4} alt="Summer Offers" />
//         </div>
//       </section>

//       {/* Shopping Section */}
//       <section className="mt-8 px-4">
//         <h2 className="text-sm font-semibold text-gray-600 mb-3">Shopping</h2>
//         <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
//           <OfferCard image={banner5} alt="Summer Sale" />
//           <OfferCard image={banner6} alt="Black Friday" />
//         </div>
//       </section>
//     </div>
//   );
// };

// const ServiceIcon = ({ title, Icon }) => (
//   <div className="flex flex-col items-center">
//     <div className="w-12 h-12 bg-purple-100 text-purple-600 flex items-center justify-center rounded-full shadow-sm">
//       <Icon className="w-6 h-6" />
//     </div>
//     <p className="text-xs text-gray-600 mt-2">{title}</p>
//   </div>
// );

// const OfferCard = ({ image, alt }) => (
//   <div className="w-40 h-24 rounded-xl overflow-hidden shadow-sm bg-white">
//     <img src={image} alt={alt} className="w-full h-full object-cover" />
//   </div>
// );

// export default ContributorsDashboard;






















// import React, { useEffect, useState } from "react";
// import { useNavigate, useLocation } from "react-router-dom";
// import {
//   PaperAirplaneIcon,
//   CurrencyDollarIcon,
//   BoltIcon,
//   CreditCardIcon,
// } from "@heroicons/react/24/outline"; // Importing Heroicons

// const ContributorsDashboard = () => {
//   const [sessions, setSessions] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   const navigate = useNavigate();
//   const location = useLocation();

//   // Determine active dashboard based on current path
//   const activeDashboard =
//     location.pathname === "/contributor-dashboard"
//       ? "Contributor"
//       : "Collector";

//   useEffect(() => {
//     window.scrollTo(0, 0);

//     // Simulate API call for newest savings sessions
//     setTimeout(() => {
//       setSessions([
//         {
//           id: 1,
//           title: "Travel Fund",
//           description: "Save for your dream vacation",
//           amount: "50,000",
//           members: 10,
//         },
//         {
//           id: 2,
//           title: "Car Savings",
//           description: "Group fund for car purchase",
//           amount: "100,000",
//           members: 15,
//         },
//         {
//           id: 3,
//           title: "House Renovation",
//           description: "Contribute towards a home makeover",
//           amount: "75,000",
//           members: 8,
//         },
//       ]);
//       setIsLoading(false);
//     }, 2000);
//   }, []);

//   return (
//     <div className="flex flex-col min-h-screen bg-gray-100">
//       {/* Header Section */}
//       <header className="bg-gradient-to-r from-purple-500 to-purple-700 text-white p-6 rounded-b-3xl shadow-md">
//         <div className="flex justify-between items-center">
//           <button
//             className="text-white text-2xl font-semibold"
//             onClick={() => navigate(-1)}
//           >
//             &#x2190;
//           </button>

//           {/* Toggle Tab */}
//           <div className="flex items-center justify-center flex-1">
//             <div className="flex items-center bg-gray-200 rounded-full p-0.5 shadow-sm">
//               <button
//                 className={`px-4 py-1 text-sm rounded-full font-medium transition-all ${activeDashboard === "Contributor"
//                   ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-md"
//                   : "text-gray-700 hover:text-purple-600"
//                   }`}
//                 onClick={() => navigate("/contributor-dashboard")}
//               >
//                 Contributor
//               </button>
//               <button
//                 className={`px-4 py-1 text-sm rounded-full font-medium transition-all ${activeDashboard === "Collector"
//                   ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-md"
//                   : "text-gray-700 hover:text-purple-600"
//                   }`}
//                 onClick={() => navigate("/collector-dashboard")}
//               >
//                 Collector
//               </button>
//             </div>
//           </div>

//           <div className="w-9 h-9 rounded-full bg-gray-200 border border-gray-300 overflow-hidden">
//             <img
//               src={`https://api.dicebear.com/5.x/avataaars/svg?seed=User123`}
//               alt="User Avatar"
//               className="w-10 h-10 rounded-full border-2 border-blue-300"
//             />
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
//           <ServiceIcon title="Send" Icon={PaperAirplaneIcon} />
//           <ServiceIcon title="Request" Icon={CurrencyDollarIcon} />
//           <ServiceIcon title="Recharge" Icon={BoltIcon} />
//           <ServiceIcon title="Payment" Icon={CreditCardIcon} />
//         </div>
//       </section>

//       {/* Newest Savings Sessions Section */}
//       <section className="mt-8 px-4">
//         <h2 className="text-sm font-semibold text-gray-600 mb-3">
//           Newest Savings Sessions
//         </h2>
//         {isLoading ? (
//           <div className="flex justify-center items-center h-40">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-purple-500 border-opacity-75"></div>
//           </div>
//         ) : (
//           <div className="space-y-4 mb-4">
//             {sessions.map((session) => (
//               <SavingsSessionCard key={session.id} session={session} />
//             ))}
//           </div>
//         )}
//       </section>
//     </div>
//   );
// };

// const ServiceIcon = ({ title, Icon }) => (
//   <div className="flex flex-col items-center">
//     <div className="w-12 h-12 bg-purple-100 text-purple-600 flex items-center justify-center rounded-full shadow-sm">
//       <Icon className="w-6 h-6" />
//     </div>
//     <p className="text-xs text-gray-600 mt-2">{title}</p>
//   </div>
// );

// // const SavingsSessionCard = ({ session }) => (
// //   <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow border">
// //     <h3 className="text-lg font-semibold text-gray-800">{session.title}</h3>
// //     <p className="text-sm text-gray-600">{session.description}</p>
// //     <div className="mt-4 flex items-center justify-between">
// //       <div>
// //         <p className="text-xs text-gray-500">Amount</p>
// //         <p className="text-sm font-bold text-purple-600">{session.amount}</p>
// //       </div>
// //       <div>
// //         <p className="text-xs text-gray-500">Members</p>
// //         <p className="text-sm font-bold text-purple-600">{session.members}</p>
// //       </div>
// //     </div>
// //   </div>
// // );


// const SavingsSessionCard = ({ session }) => (
//   <div className="bg-white p-4 rounded-xl shadow-xs hover:shadow-sm transition-shadow border flex space-x-4">
//     {/* Image Section */}
//     {/* <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-purple-200">
//       <img
//         src={`https://api.dicebear.com/6.x/icons/svg?seed=${session.title}`}
//         alt="Session"
//         className="w-full h-full object-cover"
//       />
//     </div> */}

//     {/* Content Section */}
//     <div className="flex-1">
//       <h3 className="text-lg font-semibold text-gray-800">{session.title}</h3>
//       <p className="text-sm text-gray-600">{session.description}</p>
      
//       <div className="mt-4 flex items-center justify-between">
//         <div>
//           <p className="text-xs text-gray-500">Amount</p>
//           <p className="text-sm font-bold text-purple-600">₦{session.amount.toLocaleString()}</p>
//         </div>
//         <div>
//           <p className="text-xs text-gray-500">Members</p>
//           <p className="text-sm font-bold text-purple-600">{session.members}</p>
//         </div>
//       </div>
//     </div>
//       <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-purple-200">
//       <img
//         src={`https://api.dicebear.com/6.x/icons/svg?seed=${session.title}`}
//         alt="Session"
//         className="w-full h-full object-cover"
//       />
//     </div>
//   </div>
// );

// export default ContributorsDashboard;



















import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  PaperAirplaneIcon,
  CurrencyDollarIcon,
  BoltIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline"; // Importing Heroicons

const ContributorsDashboard = () => {
  const [sessions, setSessions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  // Determine active dashboard based on current path
  const activeDashboard =
    location.pathname === "/contributor-dashboard"
      ? "Contributor"
      : "Collector";

  useEffect(() => {
    window.scrollTo(0, 0);

    // Simulate API call for newest savings sessions
    setTimeout(() => {
      setSessions([
        {
          id: 1,
          title: "Travel Fund",
          description: "Save for your dream vacation",
          amount: "50,000",
          members: 10,
        },
        {
          id: 2,
          title: "Car Savings",
          description: "Group fund for car purchase",
          amount: "100,000",
          members: 15,
        },
        {
          id: 3,
          title: "House Renovation",
          description: "Contribute towards a home makeover",
          amount: "75,000",
          members: 8,
        },
      ]);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header Section */}
      {/* <header className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-6 rounded-b-3xl shadow-md"> */}
      <header className="bg-custom-gradient text-white p-6 rounded-b-3xl shadow-md">

        <div className="flex justify-between items-center">
          <button
            className="text-white text-2xl font-semibold"
            onClick={() => navigate(-1)}
          >
            &#x2190;
          </button>

          {/* Toggle Tab */}
          <div className="flex items-center justify-center flex-1">
            <div className="flex items-center bg-gray-200 rounded-full p-0.4 shadow-sm">
              <button
                className={`px-4 py-1 text-sm rounded-full font-medium transition-all ${activeDashboard === "Contributor"
                  // ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-md"
                  ? "bg-gradient-to-r from-[#755FFF] via-[#755FFF] to-[#6A4CFF] text-white shadow-md"

                  : "text-gray-700 hover:text-purple-600"
                  }`}
                onClick={() => navigate("/contributor-dashboard")}
              >
                Contributor
              </button>
              <button
                className={`px-4 py-1 text-sm rounded-full font-medium transition-all ${activeDashboard === "Collector"
                  ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-md"
                  : "text-gray-700 hover:text-purple-600"
                  }`}
                onClick={() => navigate("/collector-dashboard")}
              >
                Collector
              </button>
            </div>
          </div>

          <div className="w-9 h-9 rounded-full bg-gray-200 border border-gray-300 overflow-hidden">
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

      {/* Newest Savings Sessions Section */}
      <section className="mt-8 px-4">
        <h2 className="text-sm font-semibold text-gray-600 mb-3">
          Newest Savings Sessions
        </h2>
        {isLoading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-customPurple border-opacity-75"></div>
          </div>
        ) : (
          <div className="space-y-4 mb-4">
            {sessions.map((session) => (
              <SavingsSessionCard key={session.id} session={session} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

const ServiceIcon = ({ title, Icon }) => (
  <div className="flex flex-col items-center">
    {/* <div className="w-12 h-12 bg-purple-100 text-purple-600 flex items-center justify-center rounded-full shadow-sm"> */}
    <div className="w-12 h-12 bg-customPurpleLight text-customPurpleMid flex items-center justify-center rounded-full shadow-sm">

      <Icon className="w-6 h-6" />
    </div>
    <p className="text-xs text-gray-600 mt-2">{title}</p>
  </div>
);

// const SavingsSessionCard = ({ session }) => (
//   <div className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow border">
//     <h3 className="text-lg font-semibold text-gray-800">{session.title}</h3>
//     <p className="text-sm text-gray-600">{session.description}</p>
//     <div className="mt-4 flex items-center justify-between">
//       <div>
//         <p className="text-xs text-gray-500">Amount</p>
//         <p className="text-sm font-bold text-purple-600">{session.amount}</p>
//       </div>
//       <div>
//         <p className="text-xs text-gray-500">Members</p>
//         <p className="text-sm font-bold text-purple-600">{session.members}</p>
//       </div>
//     </div>
//   </div>
// );


const SavingsSessionCard = ({ session }) => (
  <div className="bg-white p-4 rounded-xl shadow-xs hover:shadow-sm transition-shadow border flex space-x-4">
    {/* Image Section */}
    {/* <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-purple-200">
      <img
        src={`https://api.dicebear.com/6.x/icons/svg?seed=${session.title}`}
        alt="Session"
        className="w-full h-full object-cover"
      />
    </div> */}

    {/* Content Section */}
    <div className="flex-1">
      <h3 className="text-lg font-semibold text-gray-800">{session.title}</h3>
      <p className="text-sm text-gray-600">{session.description}</p>
      
      <div className="mt-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-gray-500">Amount</p>
          <p className="text-sm font-bold text-customPurple">₦{session.amount.toLocaleString()}</p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Members</p>
          <p className="text-sm font-bold text-customPurple">{session.members}</p>
        </div>
      </div>
    </div>
      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-purple-200">
      <img
        src={`https://api.dicebear.com/6.x/icons/svg?seed=${session.title}`}
        alt="Session"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
);

export default ContributorsDashboard;
