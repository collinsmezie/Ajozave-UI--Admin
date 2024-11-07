import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FiEdit3, FiUserPlus, FiTrash2, FiPhone } from 'react-icons/fi';
import ClipLoader from 'react-spinners/ClipLoader';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSessionDetails, deleteMember, setModalVisibility } from '../../features/session/sessionSlice'

const SessionDetailsPage = () => {
  const { sessionId } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { session, members, loading, error, showModal } = useSelector((state) => state.session);

  // console.log("LOOK", session, members, loading, error, showModal)

  // Calculate remaining members needed to reach target
  const calculateRemainingMembers = () => {
    return session && session.numberOfMembers ? session.numberOfMembers - (members?.length || 0) : 0;
  };

  const handleNavigation = () => {
    const remainingMembers = calculateRemainingMembers();
    if (remainingMembers === 0) {
      console.log("Session started");
    } else {
      navigate(`/sessions/${sessionId}/members`);
    }
  };

  const handleLoginRedirect = () => {
    dispatch(setModalVisibility(false));
    localStorage.removeItem('jwtToken');
    navigate('/authentication');
  };

  const generateNumber = () => {
    const newNumber = Math.floor(1000000000 + Math.random() * 9000000000);
    return newNumber;
  };


  useEffect(() => {
    dispatch(fetchSessionDetails(sessionId));
  }, [dispatch, sessionId]);

  const handleDeleteMember = (memberId) => {
    dispatch(deleteMember({ sessionId, memberId }));
  };

  if (showModal) {
    return (
      <>
        <div>
          <style>{`body { overflow: hidden;}`}</style>
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
        </div>
      </>
    );
  }

  if (loading || !session) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <ClipLoader color="#8b5cf6" size={40} />
      </div>
    );
  }


  if (error) {
    return <div className="flex items-center justify-center min-h-screen text-red-500">{error}</div>;
  }

  const remainingMembers = calculateRemainingMembers();
  const buttonText = remainingMembers === 0 ? "Start Session" : `Add ${remainingMembers} Member${remainingMembers > 1 ? 's' : ''}`;

  return (
    <>
      <div>
        <div className="flex flex-col min-h-screen bg-purple-50 p-4">
          {/* <header className="flex items-center justify-between w-full p-4 bg-white mb-4">
            <h1 className="text-xl sm:text-2xl font-semibold text-purple-700">Session Details</h1>
            <button
              className="text-purple-700 p-2 rounded-full hover:bg-purple-100 transition"
              onClick={() => navigate(`/sessions/${sessionId}/edit`)}
            >
              <FiEdit3 size={24} />
            </button>
          </header> */}

          <div className="flex justify-between items-center bg-white rounded-2xl p-4 shadow-sm mb-6">
            <div className="flex items-center space-x-2">
              <div className="flex flex-col">
                <p className="text-gray-700 text-sm">Your Total Contribution</p>
                <p className="font-bold text-lg">₦250,000</p>
                <p className="text-xs text-gray-500">Across 5 sessions</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-purple-100 text-purple-600 text-xs font-semibold py-1 px-3 rounded-full flex flex-col items-center mb-4">
                <span className="text-sm">Upcoming Pay</span>
                <span className="text-xs font-normal">₦20,800</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-b from-white via-gray-50 to-gray-100 rounded-xl p-6 mb-6">
            <div className="flex justify-between items-center mb-5">
              <h2 className="text-xl font-semibold text-purple-600">{session.sessionName}</h2>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium tracking-wide ${session.status === 'active' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}
              >
                {session.status === 'active' ? 'Active' : 'Inactive'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="flex flex-col items-start">
                <p className="text-xs uppercase text-gray-500 tracking-wider">Total Members</p>
                <p className="text-md font-bold text-gray-800">{session.numberOfMembers}</p>
              </div>

              <div className="flex flex-col items-start">
                <p className="text-xs uppercase text-gray-500 tracking-wider">Contribution</p>
                <p className="text-md font-bold text-gray-800">₦{session.contributionAmount.toLocaleString()}</p>
              </div>

              <div className="flex flex-col items-start">
                <p className="text-xs uppercase text-gray-500 tracking-wider">Duration</p>
                <p className="text-md font-bold text-gray-800">{session.duration} weeks</p>
              </div>

              <div className="flex flex-col items-start">
                <p className="text-xs uppercase text-gray-500 tracking-wider">Start Date</p>
                <p className="text-md font-bold text-gray-800">{new Date(session.startDate).toLocaleDateString()}</p>
              </div>

              <div className="flex flex-col items-start">
                <p className="text-xs uppercase text-gray-500 tracking-wider">End Date</p>
                <p className="text-md font-bold text-gray-800">{new Date(session.endDate).toLocaleDateString()}</p>
              </div>
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
              onClick={handleNavigation}
            >
              <FiUserPlus size={20} />
              <span>{buttonText}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SessionDetailsPage;





