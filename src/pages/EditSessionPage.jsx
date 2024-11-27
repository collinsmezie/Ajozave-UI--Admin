import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "../components/modal"; // Import the reusable modal

const EditSessionPage = () => {
  const [sessionName, setSessionName] = useState("");
  const [contributionAmount, setContributionAmount] = useState("");
  const [duration, setDuration] = useState("");
  const [members, setMembers] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [editSessionLoading, setEditSessionLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSessionExpiredModal, setShowSessionExpiredModal] = useState(false);

  const navigate = useNavigate();
  const { sessionId } = useParams(); // Get session ID from the route

  // Fetch the session details for editing
  useEffect(() => {
    const fetchSession = async () => {
      const token = localStorage.getItem("jwtToken");
      try {
        setLoading(true);
        const response = await fetch(
          `https://ajozave-api.onrender.com/api/sessions/${sessionId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 401) {
          setShowSessionExpiredModal(true); // Handle expired session
        } else if (response.ok) {
          const sessionInfo = await response.json();
          setSessionName(sessionInfo.session.sessionName);
          setContributionAmount(sessionInfo.session.contributionAmount);
          setDuration(sessionInfo.session.duration);
          setMembers(sessionInfo.session.numberOfMembers);
          setStartDate(new Date(sessionInfo.session.startDate).toISOString().split("T")[0]);
          setEndDate(new Date(sessionInfo.session.endDate).toISOString().split("T")[0]);
        } else {
          console.error("Failed to fetch session details");
        }
      } catch (error) {
        console.error("An error occurred:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSession();
  }, [sessionId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEditSessionLoading(true);

    const token = localStorage.getItem("jwtToken");
    try {
      const response = await fetch(
        `https://ajozave-api.onrender.com/api/sessions/${sessionId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            sessionName,
            contributionAmount: Number(contributionAmount),
            duration: Number(duration),
            numberOfMembers: Number(members),
            startDate,
            endDate,
          }),
        }
      );

      if (response.status === 401) {
        setShowSessionExpiredModal(true);
      } else if (response.ok) {
        setSessionName("");
        setContributionAmount("");
        setDuration("");
        setMembers("");
        setStartDate("");
        setEndDate("");
        setShowSuccessModal(true); // Show success modal
      } else {
        console.error("Failed to update session");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    } finally {
      setEditSessionLoading(false);
    }
  };

  const handleAddMembers = () => {
    setShowSuccessModal(false);
    navigate(`/sessions/${sessionId}/members`);
  };

  const handleLoginRedirect = () => {
    setShowSessionExpiredModal(false);
    navigate("/authentication");
  };

  return (
    <div className="animate-slide-in flex flex-col min-h-screen bg-purple-50">
      <div className="flex-grow p-2 overflow-y-auto">
        {/* Header */}
        <header className="flex items-center justify-between p-4 bg-white mb-4">
          <h1 className="text-2xl font-semibold text-purple-700">Edit Session Info</h1>
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
                disabled={editSessionLoading}
              >
                {editSessionLoading ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-b-2 border-white mr-2"></div>
                ) : (
                  "Save Changes"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Session Expired Modal */}
      <Modal
        isOpen={showSessionExpiredModal}
        title="Session Expired"
        message="Please log in again to continue."
        onCancel={handleLoginRedirect}
        confirmText="Login"
        disableCancel
      />

      {/* Success Modal */}
      <Modal
        isOpen={showSuccessModal}
        title="Changes Saved Successfully!"
        message="Your changes to this session have been saved."
        onConfirm={handleAddMembers}
        confirmText="Add Members"
        onCancel={() => {
          setShowSuccessModal(false);
          navigate(`/sessions/${sessionId}`);
        }}
        cancelText="View"
      />
    </div>
  );
};

export default EditSessionPage;

