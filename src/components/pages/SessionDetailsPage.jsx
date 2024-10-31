import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FiEdit3, FiUserPlus, FiTrash2 } from 'react-icons/fi';
import BottomNavigation from '../BottomNavigation';
import ClipLoader from 'react-spinners/ClipLoader';

const SessionDetailsPage = () => {
  const { sessionId } = useParams();
  const [session, setSession] = useState(null);
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [createSessionLoading, setCreateSessionLoading] = useState(false);


  useEffect(() => {
    const fetchSessionDetails = async () => {
      try {
        const token = localStorage.getItem('jwtToken');
        const response = await fetch(`https://ajozave-api.onrender.com/api/sessions/${sessionId}`, {
          // const response = await fetch(`http://localhost:4000/api/sessions/${sessionId}`, {
          headers: { 'Authorization': `Bearer ${token}` },
        });

        if (response.status === 401) {
          navigate('/authentication'); // Redirect if session expired
          return;
        }

        if (!response.ok) {
          throw new Error('Failed to fetch session details');
        }

        const data = await response.json();
        setSession(data.session);
        setMembers(data.session.members); // Assuming `members` is part of session data
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSessionDetails();
  }, [sessionId, navigate]);

  const handleDeleteMember = async (memberId) => {
    try {
      const token = localStorage.getItem('jwtToken');
      const response = await fetch(`https://ajozave-api.onrender.com/api/sessions/${sessionId}/members/${memberId}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` },
      });

      if (!response.ok) {
        throw new Error('Failed to delete member');
      }

      setMembers(members.filter((member) => member.id !== memberId));
    } catch (err) {
      setError(err.message);
    }
  };

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

    <div>
      <div className="flex flex-col min-h-screen bg-purple-50 animate-slide-in p-4">
        <header className="flex items-center justify-between bg-white shadow-md p-4 rounded-2xl mb-4">
          <h1 className="text-2xl font-semibold text-purple-700">Session Details</h1>
          <button className="text-purple-700" onClick={() => navigate(`/sessions/${sessionId}/edit`)}>
            <FiEdit3 size={24} />
          </button>
        </header>

        {/* <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-purple-700">{session.sessionName}</h2>
            <span className={`px-3 py-1 rounded-lg text-sm ${session.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {session.status === 'active' ? 'Active' : 'Inactive'}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div>
              <p className="text-sm text-gray-500">Total Members</p>
              <p className="text-lg font-bold text-gray-800">{session.numberOfMembers}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Contribution</p>
              <p className="text-lg font-bold text-gray-800">₦{session.contributionAmount.toLocaleString()}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Duration</p>
              <p className="text-lg font-bold text-gray-800">{session.duration} weeks</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Start Date</p>
              <p className="text-lg font-bold text-gray-800">{new Date(session.startDate).toLocaleDateString()}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">End Date</p>
              <p className="text-lg font-bold text-gray-800">{new Date(session.endDate).toLocaleDateString()}</p>
            </div>
          </div>
        </div> */}

<div className="bg-gradient-to-b from-white via-gray-50 to-gray-100 rounded-2xl shadow-lg p-6 mb-6">
  <div className="flex justify-between items-center mb-5">
    <h2 className="text-2xl font-semibold text-purple-600">{session.sessionName}</h2>
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium tracking-wide ${session.status === 'active' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}
    >
      {session.status === 'active' ? 'Active' : 'Inactive'}
    </span>
  </div>

  <div className="grid grid-cols-2 gap-5">
    <div className="flex flex-col items-start">
      <p className="text-xs uppercase text-gray-500 tracking-wider">Total Members</p>
      <p className="text-lg font-bold text-gray-900">{session.numberOfMembers}</p>
    </div>

    <div className="flex flex-col items-start">
      <p className="text-xs uppercase text-gray-500 tracking-wider">Contribution</p>
      <p className="text-lg font-bold text-gray-900">₦{session.contributionAmount.toLocaleString()}</p>
    </div>

    <div className="flex flex-col items-start">
      <p className="text-xs uppercase text-gray-500 tracking-wider">Duration</p>
      <p className="text-lg font-bold text-gray-900">{session.duration} weeks</p>
    </div>

    <div className="flex flex-col items-start">
      <p className="text-xs uppercase text-gray-500 tracking-wider">Start Date</p>
      <p className="text-lg font-bold text-gray-900">{new Date(session.startDate).toLocaleDateString()}</p>
    </div>

    <div className="flex flex-col items-start">
      <p className="text-xs uppercase text-gray-500 tracking-wider">End Date</p>
      <p className="text-lg font-bold text-gray-900">{new Date(session.endDate).toLocaleDateString()}</p>
    </div>
  </div>
</div>


        {/* Members List */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-10">
          <h1 className="text-lg font-semibold text-purple-700 mb-6">Session Members</h1>
          {members.length === 0 ? (
            <p className="text-gray-500 text-center">No members added yet.</p>
          ) : (
            members.map((member) => (
              <div key={member.id} className="flex justify-between items-center bg-gray-50 rounded-xl p-4 mb-2 shadow-sm">
                <div>
                  <p className="text-lg font-bold text-gray-800">{member.name}</p>
                  <p className="text-sm text-gray-500">{member.email}</p>
                </div>
                <button
                  onClick={() => handleDeleteMember(member.id)}
                  className="text-red-500 hover:bg-red-100 p-2 rounded-lg"
                >
                  <FiTrash2 size={20} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Add Members Section */}
        {/* <div className="flex justify-center">
          <button
            onClick={() => navigate(`/sessions/${sessionId}/add-members`)}
            className="w-full max-w-md mb-6 px-2 py-2 bg-purple-600 text-white rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-200 flex items-center justify-center space-x-2"
          >
            <FiUserPlus size={20} />
            <span>Add Members</span>
          </button>
        </div> */}

        <div className="text-center">
          <button
            type="submit"
            className="w-full max-w-md mb-6 px-2 py-2 bg-purple-600 text-white rounded-lg text-lg font-semibold hover:bg-purple-700 transition duration-200 flex items-center justify-center space-x-2"
            disabled={createSessionLoading} // Disable button when loading
          >

            {createSessionLoading ? (
              <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
            ) : (
              <>
                <FiUserPlus size={20} />
                <span>Add Members</span>
              </>
            )}
          </button>
        </div>

        {/* Bottom Navigation */}
      </div>
      <BottomNavigation />
    </div>
  );
};

export default SessionDetailsPage;
