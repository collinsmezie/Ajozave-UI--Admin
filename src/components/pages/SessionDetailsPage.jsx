// import React, { useState, useEffect } from 'react';
// import { useParams, Link, useNavigate } from 'react-router-dom';
// import { FiEdit3, FiUserPlus, FiTrash2, FiPhone } from 'react-icons/fi';
// import BottomNavigation from '../BottomNavigation';
// import ClipLoader from 'react-spinners/ClipLoader';

// const SessionDetailsPage = () => {
//   const { sessionId } = useParams();
//   const [session, setSession] = useState(null);
//   const [members, setMembers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
// const [showModal, setShowModal] = useState(false);
//   const navigate = useNavigate();
//   const [createSessionLoading, setCreateSessionLoading] = useState(false);

//   const handleNavigation = () => {
//     navigate(`/sessions/${sessionId}/members`);
//   };

//   const generateNumber = () => {
//     const newNumber = Math.floor(1000000000 + Math.random() * 9000000000);
//     return newNumber;
//   };


//   useEffect(() => {
//     const fetchSessionDetails = async () => {
//       try {
//         const token = localStorage.getItem('jwtToken');
// const response = await fetch(`https://ajozave-api.onrender.com/api/sessions/${sessionId}`, {
//         // const response = await fetch(`http://localhost:4000/api/sessions/${sessionId}`, {
//           headers: { 'Authorization': `Bearer ${token}` },
//         });

//         if (response.status === 401) {
//           setShowModal(true);
//           return;
//         }

//         if (!response.ok) {
//           throw new Error('Failed to fetch session details - retry');
//         }

//         const data = await response.json();
//         console.log("Data Here now", data)
//         setSession(data.session);
//         setMembers(data.session.members);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSessionDetails();
//   }, [sessionId, navigate]);

  // const handleDeleteMember = async (memberId) => {

  //   console.log("member ID here", memberId)
  //   try {
  //     const token = localStorage.getItem('jwtToken');
  //     const response = await fetch(`http://localhost:4000/api/sessions/${sessionId}/members/${memberId}`, {
  //       method: 'DELETE',
  //       headers: { 'Authorization': `Bearer ${token}` },
  //     });

  //     if (response.status === 401) {
  //       setShowModal(true);
  //       return;
  //     }

  //     if (!response.ok) {
  //       throw new Error('Failed to delete member');
  //     }

  //     setMembers(members.filter((member) => member.member._id !== memberId));
  //     console.log("Members", members)

  //   } catch (err) {
  //     setError(err.message);
  //   }
  // };

//   if (loading) {
//     return (
//       <>
//       <div className="flex items-center justify-center min-h-screen">
//         <ClipLoader color="#8b5cf6" size={40} />
//       </div>
//       <BottomNavigation />
//     </>
//     );
//   }

//   if (error) {
//     return <div className="flex items-center justify-center min-h-screen text-red-500">{error}</div>;
//   }

//   return (

//     <div>
//       <div className="flex flex-col min-h-screen bg-purple-50 animate-slide-in p-4">
//         <header className="flex items-center justify-between w-full p-4 bg-white mb-4">
//           <h1 className="text-xl sm:text-2xl font-semibold text-purple-700">Session Details</h1>
//           <button
//             className="text-purple-700 p-2 rounded-full hover:bg-purple-100 transition"
//             onClick={() => navigate(`/sessions/${sessionId}/edit`)}
//           >
//             <FiEdit3 size={24} />
//           </button>
//         </header>

//         <div className="bg-gradient-to-b from-white via-gray-50 to-gray-100 rounded-xl p-6 mb-6">
//           <div className="flex justify-between items-center mb-5">
//             <h2 className="text-xl font-semibold text-purple-600">{session.sessionName}</h2>
//             <span
//               className={`px-3 py-1 rounded-full text-xs font-medium tracking-wide ${session.status === 'active' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}
//             >
//               {session.status === 'active' ? 'Active' : 'Inactive'}
//             </span>
//           </div>

//           <div className="grid grid-cols-2 gap-5">
//             <div className="flex flex-col items-start">
//               <p className="text-xs uppercase text-gray-500 tracking-wider">Total Members</p>
//               <p className="text-md font-bold text-gray-800">{session.numberOfMembers}</p>
//             </div>

//             <div className="flex flex-col items-start">
//               <p className="text-xs uppercase text-gray-500 tracking-wider">Contribution</p>
//               <p className="text-md font-bold text-gray-800">₦{session.contributionAmount.toLocaleString()}</p>
//             </div>

//             <div className="flex flex-col items-start">
//               <p className="text-xs uppercase text-gray-500 tracking-wider">Duration</p>
//               <p className="text-md font-bold text-gray-800">{session.duration} weeks</p>
//             </div>

//             <div className="flex flex-col items-start">
//               <p className="text-xs uppercase text-gray-500 tracking-wider">Start Date</p>
//               <p className="text-md font-bold text-gray-800">{new Date(session.startDate).toLocaleDateString()}</p>
//             </div>

//             <div className="flex flex-col items-start">
//               <p className="text-xs uppercase text-gray-500 tracking-wider">End Date</p>
//               <p className="text-md font-bold text-gray-800">{new Date(session.endDate).toLocaleDateString()}</p>
//             </div>
//           </div>
//         </div>


//         {/* Members List */}
//         <div className="bg-white rounded-lg p-4 mb-10">
//           <h1 className="text-lg font-semibold text-purple-700 mb-6 ml-2">Session Members</h1>
//           {members.length === 0 ? (
//             <p className="text-gray-500 text-center">No members added yet.</p>
//           ) : (
//             members.map((obj) => (
//               <div key={obj.member._id} className="flex justify-between items-center bg-gray-50 rounded-xl p-4 mb-2 shadow-sm">
//                 <div>
//                   <p className="text-md font-bold text-gray-600">{obj.member.username}</p>
//                   {/* <p className="text-sm text-gray-500">{member.member.email}</p> */}
//                   <div className="flex items-center space-x-1 text-xs text-gray-500">
//                     <FiPhone className="text-green-500" />
//                     <span>+234 {generateNumber()}</span>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => handleDeleteMember(obj.member._id)}
//                   className="text-red-500 hover:bg-red-100 p-2 rounded-lg"
//                 >
//                   <FiTrash2 size={20} />
//                 </button>
//               </div>
//             ))
//           )}
//         </div>

//         {/* Add Members Section */}
//         {/* <div className="flex justify-center">
//           <button
//             onClick={() => navigate(`/sessions/${sessionId}/add-members`)}
//             className="w-full max-w-md mb-6 px-2 py-2 bg-purple-600 text-white rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-200 flex items-center justify-center space-x-2"
//           >
//             <FiUserPlus size={20} />
//             <span>Add Members</span>
//           </button>
//         </div> */}

//         <div className="text-center">
//           <button
//             type="submit"
//             className="w-full max-w-md mb-6 px-2 py-2 bg-purple-600 text-white rounded-lg text-lg font-semibold hover:bg-purple-700 transition duration-200 flex items-center justify-center space-x-2"
//             disabled={createSessionLoading} // Disable button when loading
//             onClick={() => handleNavigation()}

//           >
//             <FiUserPlus size={20} />
//             <span>Add Members</span>

//           </button>
//         </div>

//         {/* Bottom Navigation */}
//       </div>
//       <BottomNavigation />


//       {/* Session Expired Modal */}
//       {showModal && (
//         <>
//           <style>{`body { overflow: hidden; }`}</style>

//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//             <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//               <h3 className="text-lg font-semibold text-gray-700">Session Expired</h3>
//               <p className="text-gray-600 mt-2">Please log in again to continue.</p>
//               <button
//                 onClick={handleLoginRedirect}
//                 className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
//               >
//                 Login
//               </button>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default SessionDetailsPage;




















// import React, { useState, useEffect } from 'react';
// import { useParams, Link, useNavigate } from 'react-router-dom';
// import { FiEdit3, FiUserPlus, FiTrash2, FiPhone } from 'react-icons/fi';
// import BottomNavigation from '../BottomNavigation';
// import ClipLoader from 'react-spinners/ClipLoader';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchSessionDetails, setModalVisibility } from '../../features/session/sessionSlice'

// const SessionDetailsPage = () => {
//   const { sessionId } = useParams();

//   const [createSessionLoading, setCreateSessionLoading] = useState(false);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
  // const [showModal, setShowModal] = useState(false);


//   const { session, members, loading, error } = useSelector((state) => state.session);

//   console.log("LOOK", session, members, loading, error, showModal)

//   // Calculate remaining members needed to reach target
//   const calculateRemainingMembers = () => {
//     // return session ? session.numberOfMembers - members.length : 0;
//     return session && session.numberOfMembers ? session.numberOfMembers - (members?.length || 0) : 0;
//   };

//   const handleNavigation = () => {
//     const remainingMembers = calculateRemainingMembers();
//     if (remainingMembers === 0) {
//       console.log("Session started");
//     } else {
//       navigate(`/sessions/${sessionId}/members`);
//     }
//   };

//   const handleLoginRedirect = () => {
//     dispatch(setModalVisibility(false));
//     localStorage.removeItem('jwtToken');
//     navigate('/authentication');
//   };

  // const generateNumber = () => {
  //   const newNumber = Math.floor(1000000000 + Math.random() * 9000000000);
  //   return newNumber;
  // };



//   useEffect(() => {
//     const loadSessionDetails = async () => {
//       try {
//         console.log("About to dispatch fetchSessionDetails");
//         const resultAction = await dispatch(fetchSessionDetails(sessionId));
//         console.log("Dispatch result:", resultAction);

//         // Check if the fetch failed due to a 401 error
//         if (fetchSessionDetails.rejected.match(resultAction)) {
//           if (resultAction && resultAction.payload === 'Session expired, please log in.') {
//             setShowModal(true)
//           }
//         }
//       } catch (error) {
//         console.error("Error fetching session details:", error);
//       }
//     };

//     loadSessionDetails();
//   }, [dispatch, sessionId]);


//   const handleDeleteMember = async (memberId) => {
//     try {
//       const token = localStorage.getItem('jwtToken');
//       const response = await fetch(`https://ajozave-api.onrender.com/api/sessions/${sessionId}/members/${memberId}`, {
//         // const response = await fetch(`http://localhost:4000/api/sessions/${sessionId}/members/${memberId}`, {
//         method: 'DELETE',
//         headers: { 'Authorization': `Bearer ${token}` },
//       });

//       if (response.status === 401) {
//         setShowModal(true);
//         return;
//       }

//       if (!response.ok) {
//         throw new Error('Failed to delete member');
//       }

//       setMembers(members.filter((member) => member.member._id !== memberId));
//     } catch (err) {
//       setError(err.message);
//     }
//   };

//   if (loading || !session) {
//     return (
//       <>
//         <div className="flex items-center justify-center min-h-screen">
//           <ClipLoader color="#8b5cf6" size={40} />
//         </div>
//         <BottomNavigation />
//       </>
//     );
//   }


//   if (error) {
//     return <div className="flex items-center justify-center min-h-screen text-red-500">{error}</div>;
//   }

//   const remainingMembers = calculateRemainingMembers();
//   const buttonText = remainingMembers === 0 ? "Start Session" : `Add ${remainingMembers} Member${remainingMembers > 1 ? 's' : ''}`;

//   return (
//     <div>
//       <div className="flex flex-col min-h-screen bg-purple-50 animate-slide-in p-4">
//         <header className="flex items-center justify-between w-full p-4 bg-white mb-4">
//           <h1 className="text-xl sm:text-2xl font-semibold text-purple-700">Session Details</h1>
//           <button
//             className="text-purple-700 p-2 rounded-full hover:bg-purple-100 transition"
//             onClick={() => navigate(`/sessions/${sessionId}/edit`)}
//           >
//             <FiEdit3 size={24} />
//           </button>
//         </header>

//         <div className="bg-gradient-to-b from-white via-gray-50 to-gray-100 rounded-xl p-6 mb-6">
//           <div className="flex justify-between items-center mb-5">
//             <h2 className="text-xl font-semibold text-purple-600">{session.sessionName}</h2>
//             <span
//               className={`px-3 py-1 rounded-full text-xs font-medium tracking-wide ${session.status === 'active' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}
//             >
//               {session.status === 'active' ? 'Active' : 'Inactive'}
//             </span>
//           </div>

//           <div className="grid grid-cols-2 gap-5">
//             <div className="flex flex-col items-start">
//               <p className="text-xs uppercase text-gray-500 tracking-wider">Total Members</p>
//               <p className="text-md font-bold text-gray-800">{session.numberOfMembers}</p>
//             </div>

//             <div className="flex flex-col items-start">
//               <p className="text-xs uppercase text-gray-500 tracking-wider">Contribution</p>
//               <p className="text-md font-bold text-gray-800">₦{session.contributionAmount.toLocaleString()}</p>
//             </div>

//             <div className="flex flex-col items-start">
//               <p className="text-xs uppercase text-gray-500 tracking-wider">Duration</p>
//               <p className="text-md font-bold text-gray-800">{session.duration} weeks</p>
//             </div>

//             <div className="flex flex-col items-start">
//               <p className="text-xs uppercase text-gray-500 tracking-wider">Start Date</p>
//               <p className="text-md font-bold text-gray-800">{new Date(session.startDate).toLocaleDateString()}</p>
//             </div>

//             <div className="flex flex-col items-start">
//               <p className="text-xs uppercase text-gray-500 tracking-wider">End Date</p>
//               <p className="text-md font-bold text-gray-800">{new Date(session.endDate).toLocaleDateString()}</p>
//             </div>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg p-4 mb-10">
//           <h1 className="text-lg font-semibold text-purple-700 mb-6 ml-2">Session Members</h1>
//           {members.length === 0 ? (
//             <p className="text-gray-500 text-center">No members added yet.</p>
//           ) : (
//             members.map((obj) => (
//               <div key={obj.member._id} className="flex justify-between items-center bg-gray-50 rounded-xl p-4 mb-2 shadow-sm">
//                 <div>
//                   <p className="text-md font-bold text-gray-600">{obj.member.username}</p>
//                   <div className="flex items-center space-x-1 text-xs text-gray-500">
//                     <FiPhone className="text-green-500" />
//                     <span>+234 {generateNumber()}</span>
//                   </div>
//                 </div>
//                 <button
//                   onClick={() => handleDeleteMember(obj.member._id)}
//                   className="text-red-500 hover:bg-red-100 p-2 rounded-lg"
//                 >
//                   <FiTrash2 size={20} />
//                 </button>
//               </div>
//             ))
//           )}
//         </div>

//         <div className="text-center">
//           <button
//             type="submit"
//             className="w-full max-w-md mb-6 px-2 py-2 bg-purple-600 text-white rounded-lg text-lg font-semibold hover:bg-purple-700 transition duration-200 flex items-center justify-center space-x-2"
//             disabled={createSessionLoading}
//             onClick={handleNavigation}
//           >
//             <FiUserPlus size={20} />
//             <span>{buttonText}</span>
//           </button>
//         </div>
//       </div>
//       <BottomNavigation />

//       {showModal && (
//         <>
//           <style>{`body { overflow: hidden; }`}</style>
//           <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//             <div className="bg-white p-6 rounded-lg shadow-lg text-center">
//               <h3 className="text-lg font-semibold text-gray-700">Session Expired</h3>
//               <p className="text-gray-600 mt-2">Please log in again to continue.</p>
//               <button
//                 onClick={handleLoginRedirect}
//                 className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
//               >
//                 Login
//               </button>
//             </div>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default SessionDetailsPage;




















import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FiEdit3, FiUserPlus, FiTrash2, FiPhone } from 'react-icons/fi';
import BottomNavigation from '../BottomNavigation';
import ClipLoader from 'react-spinners/ClipLoader';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSessionDetails, setModalVisibility } from '../../features/session/sessionSlice'

const SessionDetailsPage = () => {
  const { sessionId } = useParams();
  const [createSessionLoading, setCreateSessionLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [showModal, setShowModal] = useState(false);

  const { session, members, loading, error, showModal } = useSelector((state) => state.session);

  const handleLoginRedirect = () => {
    dispatch(setModalVisibility(false));
    localStorage.removeItem('jwtToken');
    navigate('/authentication');
  };


  const generateNumber = () => {
    const newNumber = Math.floor(1000000000 + Math.random() * 9000000000);
    return newNumber;
  };

  const handleNavigation = () => {
    const remainingMembers = calculateRemainingMembers();
    if (remainingMembers === 0) {
      console.log("Session started");
    } else {
      navigate(`/sessions/${sessionId}/members`);
    }
  };

  useEffect(() => {
    dispatch(fetchSessionDetails(sessionId));
  }, [dispatch, sessionId]);

  const calculateRemainingMembers = () => {
    return session && session.numberOfMembers ? session.numberOfMembers - (members?.length || 0) : 0;
  };

  const handleDeleteMember = async (memberId) => {

    console.log("member ID here", memberId)
    try {
      const token = localStorage.getItem('jwtToken');
      const response = await fetch(`http://localhost:4000/api/sessions/${sessionId}/members/${memberId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` },
      });

      if (response.status === 401) {
        setShowModal(true);
        return;
      }

      if (!response.ok) {
        throw new Error('Failed to delete member');
      }

      setMembers(members.filter((member) => member.member._id !== memberId));
      console.log("Members", members)

    } catch (err) {
      setError(err.message);
    }
  };

  if (showModal) {
    return (
      <>
        <style>{`body { overflow: hidden; }`}</style>
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-lg font-semibold text-gray-700">Session Expired</h3>
            <p className="text-gray-600 mt-2">Please log in again to continue.</p>
            <button
              onClick={handleLoginRedirect}
              className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              Login
            </button>
          </div>
        </div>
      </>
    );
  }

  if (loading || !session) {
    return (
      <>
        <div className="flex items-center justify-center min-h-screen">
          <ClipLoader color="#8b5cf6" size={40} />
        </div>
      </>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500">{error}</div>
    );
  }

  const remainingMembers = calculateRemainingMembers();
  const buttonText = remainingMembers === 0 ? "Start Session" : `Add ${remainingMembers} Member${remainingMembers > 1 ? 's' : ''}`;

  return (
    <div className="flex flex-col min-h-screen bg-purple-50 animate-slide-in p-4">
      <header className="flex items-center justify-between w-full p-4 bg-white mb-4">
        <h1 className="text-xl sm:text-2xl font-semibold text-purple-700">Session Details</h1>
        <button
          className="text-purple-700 p-2 rounded-full hover:bg-purple-100 transition"
          onClick={() => navigate(`/sessions/${sessionId}/edit`)}
        >
          <FiEdit3 size={24} />
        </button>
      </header>

      <div className="flex-1 bg-gradient-to-b from-white via-gray-50 to-gray-100 rounded-xl p-6 mb-6">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-semibold text-purple-600">{session.sessionName}</h2>
          <span
            className={`px-3 py-1 rounded-full text-xs font-medium tracking-wide ${session.status === 'active' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}
          >
            {session.status === 'active' ? 'Active' : 'Inactive'}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-5">
          {/* Session details here */}
        </div>
      </div>

      <div className="bg-white rounded-lg p-4 mb-10">
        <h1 className="text-lg font-semibold text-purple-700 mb-6 ml-2">Session Members</h1>
        {members.length === 0 ? (
          <p className="text-gray-500 text-center">No members added yet.</p>
        ) : (
          members.map((obj) => (
            <div key={obj.member._id} className="flex justify-between items-center bg-gray-50 rounded-xl p-4 mb-2 shadow-sm">
              <div>
                <p className="text-md font-bold text-gray-600">{obj.member.username}</p>
                <div className="flex items-center space-x-1 text-xs text-gray-500">
                  <FiPhone className="text-green-500" />
                  <span>+234 {generateNumber()}</span>
                </div>
              </div>
              <button
                onClick={() => handleDeleteMember(obj.member._id)}
                className="text-red-500 hover:bg-red-100 p-2 rounded-lg"
              >
                <FiTrash2 size={20} />
              </button>
            </div>
          ))
        )}
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="w-full max-w-md mb-6 px-2 py-2 bg-purple-600 text-white rounded-lg text-lg font-semibold hover:bg-purple-700 transition duration-200 flex items-center justify-center space-x-2"
          disabled={createSessionLoading}
          onClick={handleNavigation}
        >
          <FiUserPlus size={20} />
          <span>{buttonText}</span>
        </button>
      </div>

      {/* BottomNavigation rendered at the bottom, outside of any conditional returns */}
      <BottomNavigation />
    </div>
  );
};

export default SessionDetailsPage;
