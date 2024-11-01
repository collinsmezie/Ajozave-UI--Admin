import React, { useEffect, useState } from 'react';
import { FiCheckCircle, FiUserPlus } from 'react-icons/fi';
import { ClipLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../BottomNavigation';


const MemberSelectionPage = () => {
  const [members, setMembers] = useState([]);
  const [selectedMembers, setSelectedMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submitLoading, setSubmitLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

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
        const token = localStorage.getItem('jwtToken');
        const response = await fetch('https://ajozave-api.onrender.com/api/users', {

        // const response = await fetch('http://localhost:4000/api/users', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });


        if (response.status === 401) {
          setShowModal(true);
          return;
        }

        if (!response.ok) {
          throw new Error('Failed to fetch members');
        }

        const data = await response.json();
        console.log("MEMBERS RESPONSE", data)
        setMembers(data);
      } catch (err) {
        setError(err.message);
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
      // await fetch('https://ajozave-api.onrender.com/api/sessions/add-members', {
      await fetch('https://ajozave-api.onrender.com/api/sessions/add-members', {

        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ members: selectedMembers }),
      });

      // Navigate or give success feedback
      navigate('/sessions');
    } catch (err) {
      setError('Failed to add members');
    } finally {
      setSubmitLoading(false);
    }
  };

  return (

  <div>
    <div className="flex flex-col min-h-screen bg-purple-50">
      <header className="p-4 bg-white shadow-sm text-center">
        <h2 className="text-xl font-semibold text-purple-700">Select Members</h2>
        <p className="text-gray-500 mt-1 text-sm">Interested Members for This Session</p>
      </header>

      {loading ? (
        <div className="flex items-center justify-center flex-grow">
          <ClipLoader color="#8b5cf6" size={40} />
        </div>
      ) : error ? (
        <div className="text-center text-red-500 p-4">{error}</div>
      ) : (
        <div className="p-4 flex-grow overflow-y-auto">
          {members.map((member) => (
            <div
              key={member._id}
              onClick={() => handleSelect(member._id)}
              className={`flex items-center justify-between p-4 mb-3 rounded-lg shadow-sm cursor-pointer 
                ${selectedMembers.includes(member._id) ? 'bg-purple-200 shadow-xl' : 'bg-white'} transition duration-150`}
            >
              <div className="flex items-center space-x-3">
                
                  <span className="h-2 w-2 rounded-full bg-green-500 mb-5"></span>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-600">{member.username}</h3>
                  <p className="text-sm text-gray-500">+234 {generateNumber()}</p>
                </div>
              </div>
              {selectedMembers.includes(member._id) && (
                <FiCheckCircle size={24} className="text-purple-700" />
              )}
            </div>
          ))}
        </div>
      )}

      <div className="p-4">
        <button
          onClick={handleConfirmSelection}
          disabled={submitLoading || selectedMembers.length === 0}
          className={`w-full px-4 py-2 rounded-lg text-lg font-semibold text-white bg-purple-600 
            ${submitLoading || selectedMembers.length === 0 ? 'opacity-50' : 'hover:bg-purple-700'} 
            transition duration-200`}
        >
          {submitLoading ? (
            <ClipLoader color="#fff" size={20} />
          ) : (
            <div className="flex items-center justify-center space-x-2">
              <FiUserPlus size={20} />
              <span>Confirm Selection</span>
            </div>
          )}
        </button>
      </div>

      {/* Session Expired Modal */}
      {showModal && (
        <>
          <style>{`body { overflow: hidden; }`}</style>

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
        </>
      )}
    </div>
      <BottomNavigation />
  </div>
  );
};

export default MemberSelectionPage;






