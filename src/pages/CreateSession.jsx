// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Modal from "../components/Modal";

// const CreateSessionPage = () => {
//   const [sessionName, setSessionName] = useState('');
//   const [contributionAmount, setContributionAmount] = useState('');
//   const [duration, setDuration] = useState('');
//   const [members, setMembers] = useState('');
//   const [startDate, setStartDate] = useState('');
//   const [endDate, setEndDate] = useState('');
//   const [sessionId, setSessionId] = useState('');

//   const [showExpiredModal, setShowExpiredModal] = useState(false);
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [createSessionLoading, setCreateSessionLoading] = useState(false);

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setCreateSessionLoading(true);

//     const token = localStorage.getItem('jwtToken');

//     try {
//       const response = await fetch('https://ajozave-api.onrender.com/api/sessions/new', {
//         // const response = await fetch('http://localhost:4000/api/sessions/new', {

//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           sessionName,
//           contributionAmount: Number(contributionAmount),
//           duration,
//           numberOfMembers: Number(members),
//           startDate,
//           endDate,
//         }),
//       });

//       if (response.status === 401) {
//         setShowExpiredModal(true);
//       } else if (response.ok) {
//         const sessionData = await response.json();
//         setSessionName('');
//         setContributionAmount('');
//         setDuration('');
//         setMembers('');
//         setStartDate('');
//         setEndDate('');
//         setSessionId(sessionData.session._id);
//         setShowSuccessModal(true);
//       } else {
//         const errorData = await response.json();
//         console.error('Failed to create session:', {
//           status: response.status,
//           statusText: response.statusText,
//           errorData,
//         });
//       }
//     } catch (error) {
//       console.error('An error occurred:', error);
//     } finally {
//       setCreateSessionLoading(false);
//     }
//   };

//   const handleLoginRedirect = () => {
//     setShowExpiredModal(false);
//     navigate('/authentication');
//   };

//   const handleAddMembers = () => {
//     setShowSuccessModal(false);
//     navigate(`/sessions/${sessionId}/members`);
//   };

//   return (
//     <div className="animate-slide-in flex flex-col min-h-screen bg-purple-50">
//       <div className="flex-grow p-2 overflow-y-auto">
//         {/* Header */}
//         <header className="flex items-center justify-between p-4 bg-white mb-4">
//           <h1 className="text-2xl font-semibold text-purple-700">Create Session</h1>
//         </header>

//         {/* Form Section */}
//         <div className="bg-white rounded-xl p-4 shadow-sm">
//           <form onSubmit={handleSubmit} className="space-y-4">
//             {/* Session Name */}
//             <div>
//               <label className="text-sm text-gray-600">Session Name</label>
//               <input
//                 type="text"
//                 placeholder="Enter session name"
//                 value={sessionName}
//                 onChange={(e) => setSessionName(e.target.value)}
//                 className="w-full p-3 mt-2 bg-purple-50 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-600"
//               />
//             </div>

//             {/* Contribution Amount */}
//             <div>
//               <label className="text-sm text-gray-600">Contribution Amount (₦)</label>
//               <input
//                 type="number"
//                 placeholder="Enter contribution amount"
//                 value={contributionAmount}
//                 onChange={(e) => setContributionAmount(e.target.value)}
//                 className="w-full p-3 mt-2 bg-purple-50 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-600"
//               />
//             </div>

//             {/* Duration */}
//             {/* <div>
//               <label className="text-sm text-gray-600">Duration (Weeks)</label>
//               <input
//                 type="number"
//                 placeholder="Enter session duration"
//                 value={duration}
//                 onChange={(e) => setDuration(e.target.value)}
//                 className="w-full p-3 mt-2 bg-purple-50 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-600"
//               />
//             </div> */}

//             <div>
//               <label className="text-sm text-gray-600">Duration</label>
//               <div className="relative mt-2">
//                 <select
//                   value={duration}
//                   onChange={(e) => setDuration(e.target.value)}
//                   className="w-full p-3 bg-purple-50 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-600 appearance-none"
//                 >
//                   <option value="" disabled>
//                     Select duration
//                   </option>
//                   <option value="Daily">Daily</option>
//                   <option value="Weekly">Weekly</option>
//                   <option value="Monthly">Monthly</option>
//                 </select>
//                 <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-5 w-5 text-gray-500"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M19 9l-7 7-7-7"
//                     />
//                   </svg>
//                 </div>
//               </div>
//             </div>

//             {/* Number of Members */}
//             <div>
//               <label className="text-sm text-gray-600">Number of Members</label>
//               <input
//                 type="number"
//                 placeholder="Enter number of members"
//                 value={members}
//                 onChange={(e) => setMembers(e.target.value)}
//                 className="w-full p-3 mt-2 bg-purple-50 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-600"
//               />
//             </div>

//             {/* Start Date */}
//             <div>
//               <label className="text-sm text-gray-600">Start Date</label>
//               <input
//                 type="date"
//                 value={startDate}
//                 onChange={(e) => setStartDate(e.target.value)}
//                 className="w-full p-3 mt-2 bg-purple-50 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-600"
//               />
//             </div>

//             {/* End Date */}
//             <div>
//               <label className="text-sm text-gray-600">End Date</label>
//               <input
//                 type="date"
//                 value={endDate}
//                 onChange={(e) => setEndDate(e.target.value)}
//                 className="w-full p-3 mt-2 bg-purple-50 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-600"
//               />
//             </div>

//             {/* Submit Button */}
//             <div className="text-center">
//               <button
//                 type="submit"
//                 className="w-full py-3 border border-gray-300 text-black rounded-lg mt-8 bg-purple-600 text-white hover:bg-purple-700 transition duration-300 flex items-center justify-center font-semibold text-lg tracking-wide"
//                 disabled={createSessionLoading} // Disable button when loading
//               >
//                 {createSessionLoading ? (
//                   <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
//                 ) : (
//                   'Create Session'
//                 )}
//               </button>

//             </div>
//           </form>
//         </div>
//       </div>

//       {/* Modal for Expired Token */}
//       <Modal
//         isOpen={showExpiredModal}
//         title="Session Expired"
//         message="Please log in again to continue."
//         onConfirm={handleLoginRedirect}
//         confirmText="Login"
//         disableCancel={true}
//       />

//       {/* Success Modal */}
//       <Modal
//         isOpen={showSuccessModal}
//         title="Session Created Successfully!"
//         message="Your new session has been created. You can now add members to the session."
//         onCancel={() => {
//           setShowSuccessModal(false)
//           navigate(`/sessions/${sessionId}`);
//         }}
//         onConfirm={handleAddMembers}
//         confirmText="Add Members"
//         cancelText="View"
//       />
//     </div>
//   );
// };

// export default CreateSessionPage;










































import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from "../components/Modal";

const CreateSessionPage = () => {
  const [sessionName, setSessionName] = useState('');
  const [contributionAmount, setContributionAmount] = useState('');
  const [duration, setDuration] = useState('');
  const [members, setMembers] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [description, setDescription] = useState(null);
  const [sessionId, setSessionId] = useState('');

  const [showExpiredModal, setShowExpiredModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [createSessionLoading, setCreateSessionLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCreateSessionLoading(true);

    const token = localStorage.getItem('jwtToken');

    try {
      const response = await fetch('https://ajozave-api.onrender.com/api/sessions/new', {
        // const response = await fetch('http://localhost:4000/api/sessions/new', {

        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          sessionName,
          contributionAmount: Number(contributionAmount),
          duration,
          numberOfMembers: Number(members),
          startDate,
          endDate,
          description: description?.trim() ? description : null
        }),
      });

      if (response.status === 401) {
        setShowExpiredModal(true);
      } else if (response.ok) {
        const sessionData = await response.json();
        console.log("created-session-data", sessionData)
        setSessionName('');
        setContributionAmount('');
        setDuration('');
        setMembers('');
        setStartDate('');
        setEndDate('');
        setDescription('');
        setSessionId(sessionData.session._id);
        setShowSuccessModal(true);
      } else {
        const errorData = await response.json();
        console.error('Failed to create session:', {
          status: response.status,
          statusText: response.statusText,
          errorData,
        });
      }
    } catch (error) {
      console.error('An error occurred:', error);
    } finally {
      setCreateSessionLoading(false);
    }
  };

  const handleLoginRedirect = () => {
    setShowExpiredModal(false);
    navigate('/authentication');
  };

  const handleAddMembers = () => {
    setShowSuccessModal(false);
    navigate(`/collector-sessions/${sessionId}/members`);
  };

  return (
    <div className="animate-slide-in flex flex-col min-h-screen bg-gray-100">
      <div className="flex-grow p-2 overflow-y-auto">
        {/* Header */}
        <header className="flex items-center justify-between p-4 bg-white mb-4">
          <h1 className="text-2xl font-bold text-customViolet">Create session</h1>
        </header>

        {/* Form Section */}
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Session Name */}
            <div>
              <label className="text-sm text-gray-600">Session Name</label>
              <input
                type="text"
                placeholder="Enter session name"
                value={sessionName}
                onChange={(e) => setSessionName(e.target.value)}
                className="w-full p-3 mt-2 bg-gray-50 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-600"
              />
            </div>

            {/* Contribution Amount */}
            <div>
              <label className="text-sm text-gray-600">Contribution Amount (₦)</label>
              <input
                type="number"
                placeholder="Enter contribution amount"
                value={contributionAmount}
                onChange={(e) => setContributionAmount(e.target.value)}
                className="w-full p-3 mt-2 bg-gray-50 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-600"
              />
            </div>

            {/* Duration */}
              <div>
              <label className="text-sm text-gray-600">Duration</label>
              <div className="relative mt-2">
                <select
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-600 appearance-none"
                >
                  <option value="" disabled>
                    Select duration
                  </option>
                  <option value="Daily">Daily</option>
                  <option value="Weekly">Weekly</option>
                  <option value="Monthly">Monthly</option>
                </select>
                <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Number of Members */}
            <div>
              <label className="text-sm text-gray-600">Number of Members</label>
              <input
                type="number"
                placeholder="Enter number of members"
                value={members}
                onChange={(e) => setMembers(e.target.value)}
                className="w-full p-3 mt-2 bg-gray-50 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-600"
              />
            </div>

            {/* Start Date */}
            <div>
              <label className="text-sm text-gray-600">Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full p-3 mt-2 bg-gray-50 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-600"
              />
            </div>

            {/* End Date */}
            <div>
              <label className="text-sm text-gray-600">End Date</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full p-3 mt-2 bg-gray-50 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-600"
              />
            </div>

            {/* Savings Description */}
            <div>
              <label className="text-sm text-gray-600">Savings Description</label>
              <textarea
                placeholder="Enter a brief description of the savings session"
                value={description ?? ""}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-3 mt-2 bg-gray-50 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple-600 resize-none min-h-[100px]"
              ></textarea>
            </div>


            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full py-3 border border-gray-300 text-black rounded-lg mt-8 bg-customViolet text-white hover:bg-purple-800 transition duration-300 flex items-center justify-center font-semibold text-lg tracking-wide"
                disabled={createSessionLoading} // Disable button when loading
              >
                {createSessionLoading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
                ) : (
                  'Create Session'
                )}
              </button>

            </div>
          </form>
        </div>
      </div>

      {/* Modal for Expired Token */}
      <Modal
        isOpen={showExpiredModal}
        title="Session Expired"
        message="Please log in again to continue."
        onConfirm={handleLoginRedirect}
        confirmText="Login"
        disableCancel={true}
      />

      {/* Success Modal */}
      <Modal
        isOpen={showSuccessModal}
        title="Session Created Successfully!"
        message="Your new session has been created. You can now add members to the session."
        onCancel={() => {
          setShowSuccessModal(false)
          navigate(`/collector-sessions/${sessionId}`);
        }}
        onConfirm={handleAddMembers}
        confirmText="Add Members"
        cancelText="View"
      />
    </div>
  );
};

export default CreateSessionPage;
