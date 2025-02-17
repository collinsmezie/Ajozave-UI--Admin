import { truncateDescription } from "../utility/helper";

const SavingsSessionCard = ({ session }) => (
    <div className="bg-white p-4 rounded-xl shadow-xs hover:shadow-sm hover:scale-105 focus:scale-105 transition-shadow border flex space-x-4">
      {/* Image Section */}
      {/* <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-purple-200">
    <img
      src={`https://api.dicebear.com/6.x/icons/svg?seed=${session.title}`}
      alt="Session"
      className="w-full h-full object-cover"
    />
  </div> */}
  
      {/* Content Section */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-800">{session.title}</h3>
        <p className="text-sm text-gray-600">{truncateDescription(session.description)}</p>
  
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">Amount</p>
            <p className="text-sm font-bold text-customPurple">₦{session.amount.toLocaleString()}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Members</p>
            <p className="text-sm font-bold text-customPurple">{session.members}</p>
          </div>
        </div>
      </div>
      <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border border-purple-200">
        <img
          src={`https://api.dicebear.com/6.x/icons/svg?seed=${session.title}`}
          alt="Session"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );

export default SavingsSessionCard;
  