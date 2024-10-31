import React, { useState } from 'react';
import BottomNavigation from '../BottomNavigation';
import { useNavigate } from 'react-router-dom';


const CreateSessionPage = () => {
  const [sessionName, setSessionName] = useState('');
  const [contributionAmount, setContributionAmount] = useState('');
  const [duration, setDuration] = useState('');
  const [members, setMembers] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [createSessionLoading, setCreateSessionLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCreateSessionLoading(true)

    const token = localStorage.getItem('jwtToken'); // Assuming the JWT token is stored in localStorage

    try {
      const response = await fetch('https://ajozave-api.onrender.com/api/session/new', {
        // const response = await fetch('http://localhost:4000/api/session/new', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          sessionName,
          contributionAmount: Number(contributionAmount),
          duration: Number(duration),
          numberOfMembers: Number(members),
          startDate,
          endDate
        })
      });


      if (response.status === 401) {
        setShowModal(true);
      } else if (response.ok) {
        setSessionName('');
        setContributionAmount('');
        setDuration('');
        setMembers('');
        setStartDate('');
        setEndDate('');
        setShowSuccessModal(true);
      } else {
        const errorData = await response.json();
        console.error('Failed to create session:', {
          status: response.status,
          statusText: response.statusText,
          errorData
        });
      }
    } catch (error) {
      console.error('An error occurred:', error);
    } finally {
      setCreateSessionLoading(false)
    }
  };

  const handleLoginRedirect = () => {
    setShowModal(false);
    navigate('/authentication');

  };

  const handleAddMembers = () => {
    setShowSuccessModal(false);
    navigate('/dashboard');

  };

  return (
    <div className="animate-slide-in flex flex-col min-h-screen bg-purple-50">
      <div className="flex-grow p-4 overflow-y-auto">
        {/* Header */}
        <header className="flex items-center justify-between p-4 bg-white shadow-md rounded-b-2xl mb-4">
          <h1 className="text-2xl font-semibold text-purple-700">Create Session</h1>
        </header>

        {/* Form Section */}
        <div className="bg-white rounded-2xl p-4 shadow-md">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Session Name */}
            <div>
              <label className="text-sm text-gray-600">Session Name</label>
              <input
                type="text"
                placeholder="Enter session name"
                value={sessionName}
                onChange={(e) => setSessionName(e.target.value)}
                className="w-full p-3 mt-2 bg-purple-50 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-600"
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
                className="w-full p-3 mt-2 bg-purple-50 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-600"
              />
            </div>

            {/* Duration */}
            <div>
              <label className="text-sm text-gray-600">Duration (Weeks)</label>
              <input
                type="number"
                placeholder="Enter session duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full p-3 mt-2 bg-purple-50 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-600"
              />
            </div>

            {/* Number of Members */}
            <div>
              <label className="text-sm text-gray-600">Number of Members</label>
              <input
                type="number"
                placeholder="Enter number of members"
                value={members}
                onChange={(e) => setMembers(e.target.value)}
                className="w-full p-3 mt-2 bg-purple-50 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-600"
              />
            </div>

            {/* Start Date */}
            <div>
              <label className="text-sm text-gray-600">Start Date</label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full p-3 mt-2 bg-purple-50 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-600"
              />
            </div>

            {/* End Date */}
            <div>
              <label className="text-sm text-gray-600">End Date</label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full p-3 mt-2 bg-purple-50 rounded-lg border border-purple-200 focus:ring-2 focus:ring-purple-600"
              />
            </div>


            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full py-3 border border-gray-300 text-black rounded-lg mt-8 bg-purple-600 text-white hover:bg-purple-700 transition duration-300 flex items-center justify-center"
                disabled={createSessionLoading} // Disable button when loading

              >
                {createSessionLoading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
                ) : (
                  "Create Session"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      <BottomNavigation />

      {/* Modal for Expired Token */}
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

      {/* Success Modal */}
      {showSuccessModal && (
        <>
          {/* Add 'overflow-hidden' to the body while modal is open */}
          <style>{`body { overflow: hidden; }`}</style>
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-2xl shadow-lg text-center w-full max-w-md mx-4 sm:max-w-lg sm:p-8">
              <h3 className="text-xl font-bold text-purple-600">Session Created Successfully!</h3>
              <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed">
                Your new session has been created. You can now add members to the session.
              </p>
              <div className="mt-6 flex justify-center space-x-4">
                <button
                  onClick={() => setShowSuccessModal(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                >
                  Close
                </button>
                <button
                  onClick={handleAddMembers}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                >
                  Add Members
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CreateSessionPage;