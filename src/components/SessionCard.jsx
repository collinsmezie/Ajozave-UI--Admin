const SessionCard = ({ session }) => {
    return (
      <div className="p-4 bg-white rounded-lg shadow-lg hover:bg-gray-100 transition-transform transform hover:scale-105">
        <h3 className="text-lg font-bold text-gray-800">{session.name}</h3>
        <p className="text-sm text-gray-500">Contributors: {session.contributors}</p>
        <p className="text-sm text-gray-500">Total Collected: ${session.totalCollected}</p>
        <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300">
          Manage
        </button>
      </div>
    );
  };
  
  export default SessionCard;
  