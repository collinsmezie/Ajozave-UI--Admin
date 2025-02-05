// import React, { useEffect, useState } from 'react';
// import { FiCheckCircle, FiCircle, FiCheck, FiUserPlus, FiPhone } from 'react-icons/fi';
// import { ClipLoader } from 'react-spinners';
// import { useNavigate, useParams } from 'react-router-dom';
// import Modal from '../components/Modal';

// const MemberSelectionPage = () => {
//   const { sessionId } = useParams();
//   const [members, setMembers] = useState([]);
//   const [selectedMembers, setSelectedMembers] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [submitLoading, setSubmitLoading] = useState(false);
//   const [showModal, setShowModal] = useState(false);
//   const [modalContent, setModalContent] = useState(null);

//   const navigate = useNavigate();

//   const handleLoginRedirect = () => {
//     localStorage.removeItem('jwtToken');
//     navigate('/authentication');
//   };

//   const generateNumber = () => {
//     const newNumber = Math.floor(1000000000 + Math.random() * 9000000000);
//     return newNumber;
//   };

//   useEffect(() => {
//     const fetchMembers = async () => {
//       setLoading(true);
//       try {
//         // Show loading spinner in modal
//         setModalContent({
//           title: "Retrying Please Wait...",
//           message: <ClipLoader color="#8b5cf6" size={30} />,
//           onConfirm: null, // Disable action during the loading phase
//           confirmText: null,
//         });
//         const token = localStorage.getItem('jwtToken');
//         const response = await fetch('https://ajozave-api.onrender.com/api/users', {
//         // const response = await fetch('http://localhost:4000/api/users', {

//           headers: {
//             'Authorization': `Bearer ${token}`,
//           },
//         });

//         if (response.status === 401) {
//           setModalContent({
//             title: 'Session Expired',
//             message: 'Please log in again to continue.',
//             onConfirm: handleLoginRedirect,
//             confirmText: 'Login',
//             disableCancel: true,
//           });
//           setShowModal(true);
//           return;
//         }

//         if (!response.ok) {
//           const errorMessage = await response.json().catch(() => ({}));
//           throw new Error(errorMessage.error || "An unexpected error occurred");
//         }

//         const data = await response.json();
//         setMembers(data);
//         setShowModal(false);
//       } catch (err) {
//         setModalContent({
//           title: 'Errorss',
//           message: err.message || "An unexpected error occurred",
//           onConfirm: fetchMembers,
//           confirmText: 'Retry',
//           disableCancel: true,
//         });
//         setShowModal(true);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchMembers();
//   }, []);

//   const handleSelect = (memberId) => {
//     setSelectedMembers((prev) =>
//       prev.includes(memberId)
//         ? prev.filter((id) => id !== memberId)
//         : [...prev, memberId]
//     );
//   };

//   const handleConfirmSelection = async () => {
//     setSubmitLoading(true);
//     try {
//       const token = localStorage.getItem('jwtToken');
//       const response = await fetch('https://ajozave-api.onrender.com/api/sessions/add-members', {
//       // const response = await fetch('http://localhost:4000/api/sessions/add-members', {

//         method: 'PUT',
//         headers: {
//           'Authorization': `Bearer ${token}`,
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           id: sessionId,
//           members: selectedMembers,
//         }),
//       });

//       const info = await response.json();

//       if (response.status === 401) {
//         setModalContent({
//           title: 'Session Expired',
//           message: 'Please log in again to continue.',
//           onConfirm: handleLoginRedirect,
//           confirmText: 'Login',
//           disableCancel: true,
//         });
//         setShowModal(true);
//         return;
//       }

//       if (response.status === 400) {
//         setModalContent({
//           title: 'Error',
//           message: info.error,
//           onCancel: () => setModalContent((prev) => ({ ...prev, isOpen: false })),
//         });
//         setShowModal(true);
//         return;
//       }

//       navigate(`/sessions/${sessionId}`);
//     } catch (err) {
//       setModalContent({
//         title: 'Error',
//         message: 'Failed to add members. Please try again later.',
//         onCancel: () => setModalContent((prev) => ({ ...prev, isOpen: false })),
//       });
//       setShowModal(true);
//     } finally {
//       setSubmitLoading(false);
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-purple-50">
//       <header className="p-4 bg-white shadow-sm text-center">
//         <h2 className="text-xl font-semibold text-purple-700">Select Members</h2>
//         <p className="text-gray-500 mt-1 text-sm">Interested Members for This Session</p>
//       </header>

//       {loading ? (
//         <div className="flex items-center justify-center flex-grow">
//           <ClipLoader color="#8b5cf6" size={40} />
//         </div>
//       ) : (
//         <div className="flex flex-col flex-grow p-4">
//           <div className="flex-grow overflow-y-auto">
//             {members.map((member) => (
//               <div
//                 key={member._id}
//                 onClick={() => handleSelect(member._id)}
//                 className={`flex items-center justify-between p-4 mb-3 rounded-lg shadow-sm cursor-pointer bg-white`}
//               >
//                 <div className="flex items-center space-x-3">
//                   <span className="h-2 w-2 rounded-full bg-green-500 mb-5"></span>
//                   <div>
//                     <h3 className="text-md font-semibold text-gray-600">{member.username}</h3>
//                     <div className="flex items-center space-x-1 text-xs text-gray-500">
//                       <FiPhone className="text-green-500" />
//                       <span>+234 {generateNumber()}</span>
//                     </div>
//                   </div>
//                 </div>
//                 {selectedMembers.includes(member._id) ? (
//                   <div className="flex items-center justify-center w-5 h-5 rounded-full bg-purple-500">
//                     <FiCheck size={16} className="text-white" />
//                   </div>
//                 ) : (
//                   <FiCircle size={20} className="text-purple-700" />
//                 )}
//               </div>
//             ))}
//           </div>

//           <button
//             onClick={handleConfirmSelection}
//             disabled={submitLoading || selectedMembers.length === 0}
//             className={`mt-4 w-full px-4 py-2 rounded-lg text-lg font-semibold text-white bg-purple-600 
//             ${submitLoading || selectedMembers.length === 0 ? 'opacity-50' : 'hover:bg-purple-700'} 
//             transition duration-200 flex items-center justify-center`}
//             style={{ minHeight: '48px' }}
//           >
//             {submitLoading ? (
//               <div className="flex items-center justify-center space-x-2">
//                 <ClipLoader color="#fff" size={20} />
//               </div>
//             ) : (
//               <div className="flex items-center justify-center space-x-2">
//                 <FiUserPlus size={20} />
//                 <span>Confirm Selection</span>
//               </div>
//             )}
//           </button>
//         </div>
//       )}

//       {/* <Modal {...modalData} /> */}

//       {showModal && modalContent && (
//         <>
//           <Modal
//             isOpen={showModal}
//             title={modalContent?.title || ''}
//             message={modalContent?.message || ''}
//             onCancel={() => {
//               setShowModal(false);
//               // handleCancelLongPress();
//             }}
//             onConfirm={modalContent?.onConfirm || null}
//             confirmText={modalContent?.confirmText}
//             disableCancel={modalContent?.disableCancel || false}
//           />
//         </>
//       )}
//     </div>
//   );
// };

// export default MemberSelectionPage;
































import React, { useEffect, useState } from 'react';
import { FiCheckCircle, FiCircle, FiCheck, FiUserPlus, FiPhone } from 'react-icons/fi';
import { ClipLoader } from 'react-spinners';
import { useNavigate, useParams } from 'react-router-dom';
import Modal from '../components/Modal';

const MemberSelectionPage = () => {
  const { sessionId } = useParams();
  const [members, setMembers] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const navigate = useNavigate();

  const handleLoginRedirect = () => {
    localStorage.removeItem('jwtToken');
    navigate('/authentication');
  };

  const generateNumber = () => {
    const newNumber = Math.floor(1000000000 + Math.random() * 9000000000);
    return newNumber;
  };

  useEffect(() => {
    const fetchMembers = async () => {
      setLoading(true);
      try {
        // Show loading spinner in modal
        setModalContent({
          title: "Retrying Please Wait...",
          message: <ClipLoader color="#8b5cf6" size={30} />,
          onConfirm: null, // Disable action during the loading phase
          confirmText: null,
        });
        const token = localStorage.getItem('jwtToken');
        const response = await fetch('https://ajozave-api.onrender.com/api/users', {
          // const response = await fetch('http://localhost:4000/api/users', {

          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });

        if (response.status === 401) {
          setModalContent({
            title: 'Session Expired',
            message: 'Please log in again to continue.',
            onConfirm: handleLoginRedirect,
            confirmText: 'Login',
            disableCancel: true,
          });
          setShowModal(true);
          return;
        }

        if (!response.ok) {
          const errorMessage = await response.json().catch(() => ({}));
          throw new Error(errorMessage.error || "An unexpected error occurred");
        }

        const data = await response.json();
        setMembers(data);
        setShowModal(false);
      } catch (err) {
        setModalContent({
          title: 'Errorss',
          message: err.message || "An unexpected error occurred",
          onConfirm: fetchMembers,
          confirmText: 'Retry',
          disableCancel: true,
        });
        setShowModal(true);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  const handleSelect = (memberId) => {
    setSelectedMembers((prev) =>
      prev.includes(memberId)
        ? prev.filter((id) => id !== memberId)
        : [...prev, memberId]
    );
  };

  const handleConfirmSelection = async () => {
    setSubmitLoading(true);
    try {
      const token = localStorage.getItem('jwtToken');
      const response = await fetch('https://ajozave-api.onrender.com/api/sessions/add-members', {
        // const response = await fetch('http://localhost:4000/api/sessions/add-members', {

        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: sessionId,
          members: selectedMembers,
        }),
      });

      const info = await response.json();

      if (response.status === 401) {
        setModalContent({
          title: 'Session Expired',
          message: 'Please log in again to continue.',
          onConfirm: handleLoginRedirect,
          confirmText: 'Login',
          disableCancel: true,
        });
        setShowModal(true);
        return;
      }

      if (response.status === 400) {
        setModalContent({
          title: 'Error',
          message: info.error,
          onCancel: () => setModalContent((prev) => ({ ...prev, isOpen: false })),
        });
        setShowModal(true);
        return;
      }

      navigate(`/collector-sessions/${sessionId}`);
    } catch (err) {
      setModalContent({
        title: 'Error',
        message: 'Failed to add members. Please try again later.',
        onCancel: () => setModalContent((prev) => ({ ...prev, isOpen: false })),
      });
      setShowModal(true);
    } finally {
      setSubmitLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="p-4 bg-white shadow-sm text-center">
        <h2 className="text-xl font-semibold text-customViolet">Select Members</h2>
        <p className="text-gray-500 mt-1 text-sm">Interested Members for This Session</p>
      </header>

      {loading ? (
        <div className="flex items-center justify-center flex-grow">
          <ClipLoader color="#8b5cf6" size={40} />
        </div>
      ) : (
        <div className="flex flex-col flex-grow p-4">
          <div className="flex-grow overflow-y-auto">
            {members.map((member) => (
              <div
                key={member._id}
                onClick={() => handleSelect(member._id)}
                className={`flex items-center justify-between p-4 mb-3 rounded-lg shadow-sm cursor-pointer bg-white`}
              >
                <div className="flex items-center space-x-1">
                  {/* Avatar Section */}
                  <div className="w-8 h-8 rounded-full overflow-hidden border border-customViolet mr-4">
                    <img
                      src={`https://api.dicebear.com/5.x/avataaars/svg?seed=${member.username}`}
                      alt={`${member.username}'s avatar`}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Member Details Section */}
                  <div className="flex-grow">
                    <p className="text-sm font-semibold text-gray-800">{member.username}</p>
                    <div className="flex items-center space-x-1 text-xs text-gray-400">
                      <FiPhone className="text-green-500" />
                      <span>+234-{generateNumber()}</span>
                    </div>
                  </div>
                </div>
                {selectedMembers.includes(member._id) ? (
                  <div className="flex items-center justify-center w-5 h-5 rounded-full bg-customViolet">
                    <FiCheck size={16} className="text-white" />
                  </div>
                ) : (
                  <FiCircle size={20} className="text-customViolet" />
                )}
              </div>
            ))}
          </div>

          <button
            onClick={handleConfirmSelection}
            disabled={submitLoading || selectedMembers.length === 0}
            className={`mt-4 w-full px-4 py-2 rounded-lg text-lg font-semibold text-white bg-customViolet 
            ${submitLoading || selectedMembers.length === 0 ? 'opacity-50' : 'hover:bg-purple-700'} 
            transition duration-200 flex items-center justify-center`}
            style={{ minHeight: '48px' }}
          >
            {submitLoading ? (
              <div className="flex items-center justify-center space-x-2">
                <ClipLoader color="#fff" size={20} />
              </div>
            ) : (
              <div className="flex items-center justify-center space-x-2">
                <FiUserPlus size={20} />
                <span>Confirm Selection</span>
              </div>
            )}
          </button>
        </div>
      )}

      {/* <Modal {...modalData} /> */}

      {showModal && modalContent && (
        <>
          <Modal
            isOpen={showModal}
            title={modalContent?.title || ''}
            message={modalContent?.message || ''}
            onCancel={() => {
              setShowModal(false);
              // handleCancelLongPress();
            }}
            onConfirm={modalContent?.onConfirm || null}
            confirmText={modalContent?.confirmText}
            disableCancel={modalContent?.disableCancel || false}
          />
        </>
      )}
    </div>
  );
};

export default MemberSelectionPage;
