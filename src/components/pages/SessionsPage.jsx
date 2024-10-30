// import React, { useEffect, useState } from 'react';
// import { useSwipeable } from 'react-swipeable';
// import { Link } from 'react-router-dom';
// import { FiPlusCircle } from 'react-icons/fi';
// import BottomNavigation from '../BottomNavigation';
// import ClipLoader from 'react-spinners/ClipLoader';

// const SessionsPage = () => {
//   const [sessions, setSessions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  
//   useEffect(() => {
//     const fetchSessions = async () => {
//       try {
//         const token = localStorage.getItem('jwtToken');
//         const response = await fetch('http://localhost:4000/api/sessions', {
//           headers: {
//             'Authorization': `Bearer ${token}`,
//           },
//         });
        
//         if (!response.ok) {
//           throw new Error('Failed to fetch sessions');
//         }
        
//         const data = await response.json();
//         setSessions(data.sessions);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
    
//     fetchSessions();
//   }, []);

//   const swipeHandlers = useSwipeable({
//     onSwipedLeft: () => {},
//     onSwipedRight: () => {},
//     trackMouse: true,
//   });

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <ClipLoader color="#8b5cf6" size={40} />
//       </div>
//     );
//   }

//   if (error) {
//     return <div className="flex items-center justify-center min-h-screen text-red-500">{error}</div>;
//   }

//   return (
//     <div className="flex flex-col min-h-screen bg-purple-50 animate-slide-in">
//       <header className="flex items-center justify-between p-4 bg-white shadow-md rounded-b-2xl">
//         <h1 className="text-2xl font-semibold text-purple-700">My Sessions</h1>
//         <Link to="/sessions/new" className="text-purple-700">
//           <FiPlusCircle size={28} />
//         </Link>
//       </header>

//       {/* List of Sessions */}
//       <div className="flex-grow p-4 overflow-y-auto" {...swipeHandlers}>
//         {sessions.length === 0 ? (
//           <p className="text-gray-500 text-center mt-10">
//             You haven't created any sessions yet.
//           </p>
//         ) : (
//           sessions.map(session => (
//             <div
//               key={session.id}
//               className="bg-white rounded-2xl p-4 mb-4 shadow-md hover:bg-purple-50 transition duration-200 cursor-pointer"
//             >
//               <Link to={`/sessions/${session.id}`} className="block">
//                 <div className="flex justify-between items-center">
//                   <h2 className="text-lg font-semibold text-purple-700">{session.sessionName}</h2>
//                   <span className="text-sm text-gray-500">
//                     {session.numberOfMembers} members
//                   </span>
//                 </div>
//                 <div className="flex justify-between items-center mt-2">
//                   <div>
//                     <p className="text-sm text-gray-500">Contribution</p>
//                     <p className="text-lg font-bold text-gray-800">₦{session.contributionAmount.toLocaleString()}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Duration</p>
//                     <p className="text-lg font-bold text-gray-800">{session.duration} months</p>
//                   </div>
//                   <div className="text-right">
//                     <p className="text-sm text-gray-500">Start Date</p>
//                     <p className="text-lg font-bold text-gray-800">{new Date(session.startDate).toLocaleDateString()}</p>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           ))
//         )}
//       </div>

//       {/* Bottom Navigation */}
//       <BottomNavigation />
//     </div>
//   );
// };

// export default SessionsPage;











import React, { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import { Link, useNavigate } from 'react-router-dom';
import { FiPlusCircle } from 'react-icons/fi';
import BottomNavigation from '../BottomNavigation';
import ClipLoader from 'react-spinners/ClipLoader';

const SessionsPage = () => {
  const [sessions, setSessions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false); // Modal state for session expiration
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const token = localStorage.getItem('jwtToken');
        const response = await fetch('http://localhost:4000/api/sessions', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.status === 401) {
          setShowModal(true); // Show modal if session is expired
          return;
        }

        if (!response.ok) {
          throw new Error('Failed to fetch sessions');
        }

        const data = await response.json();
        setSessions(data.sessions);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSessions();
  }, []);

  const handleLoginRedirect = () => {
    // Clear token and redirect to login
    localStorage.removeItem('jwtToken');
    navigate('/authentication');
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {},
    onSwipedRight: () => {},
    trackMouse: true,
  });

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <ClipLoader color="#8b5cf6" size={40} />
      </div>
    );
  }

  if (error) {
    return <div className="flex items-center justify-center min-h-screen text-red-500">{error}</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-purple-50 animate-slide-in">
      <header className="flex items-center justify-between p-4 bg-white shadow-md rounded-b-2xl">
        <h1 className="text-2xl font-semibold text-purple-700">My Sessions</h1>
        <Link to="/sessions/new" className="text-purple-700">
          <FiPlusCircle size={28} />
        </Link>
      </header>

      {/* List of Sessions */}
      <div className="flex-grow p-4 overflow-y-auto" {...swipeHandlers}>
        {sessions.length === 0 ? (
          <p className="text-gray-500 text-center mt-10">
            You haven't created any sessions yet.
          </p>
        ) : (
          sessions.map(session => (
            <div
              key={session.id}
              className="bg-white rounded-2xl p-4 mb-4 shadow-md hover:bg-purple-50 transition duration-200 cursor-pointer"
            >
              <Link to={`/sessions/${session.id}`} className="block">
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-purple-700">{session.sessionName}</h2>
                  <span className="text-sm text-gray-500">
                    {session.numberOfMembers} members
                  </span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <div>
                    <p className="text-sm text-gray-500">Contribution</p>
                    <p className="text-lg font-bold text-gray-800">₦{session.contributionAmount.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="text-lg font-bold text-gray-800">{session.duration} months</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-500">Start Date</p>
                    <p className="text-lg font-bold text-gray-800">{new Date(session.startDate).toLocaleDateString()}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />

      {/* Session Expired Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
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
      )}
    </div>
  );
};

export default SessionsPage;
