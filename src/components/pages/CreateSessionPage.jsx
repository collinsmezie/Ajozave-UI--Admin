import React, { useState } from 'react';
import BottomNavigation from '../BottomNavigation';

const CreateSessionPage = () => {
  // Form state
  const [sessionName, setSessionName] = useState('');
  const [contributionAmount, setContributionAmount] = useState('');
  const [duration, setDuration] = useState('');
  const [members, setMembers] = useState('');
  const [startDate, setStartDate] = useState('');

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle the session creation logic (e.g., API call)
    console.log('Creating session with data:', {
      sessionName,
      contributionAmount,
      duration,
      members,
      startDate,
    });
  };

  return (
    <div className="animate-slide-in flex flex-col min-h-screen bg-purple-50">
      <div className="flex-grow p-4 overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between items-center bg-white rounded-2xl p-4 shadow-md mb-4">
          <h2 className="font-bold text-lg text-gray-800">Create New Ajo Session</h2>
        </div>

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

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="w-full py-3 border border-gray-300 text-black rounded-lg mt-8 bg-purple-600 text-white hover:bg-purple-700 transition duration-300 flex items-center justify-center"
                >
                Create Session
              </button>
            </div>
          </form>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
};

export default CreateSessionPage;
