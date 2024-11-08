import React, { useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useSwipeable } from 'react-swipeable';
import StatsTab from '../StatsTab';
import SessionsTab from '../SessionsTab';
import GoalsTab from '../GoalsTab';
import MembersTab from '../MembersTab';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('Stats');
  const [previousTab, setPreviousTab] = useState('Stats');
  const totalContributions = 400000;
  const remainingPayments = 100000;
  const percentagePaymentsMade = ((totalContributions - remainingPayments) / totalContributions) * 100;

  const tabOrder = ['Stats', 'Sessions', 'Goals', 'Members'];
  const getAnimationClass = () => {
    const currentIndex = tabOrder.indexOf(activeTab);
    const previousIndex = tabOrder.indexOf(previousTab);

    if (currentIndex > previousIndex) {
      return 'animate-slide-in-right';
    } else if (currentIndex < previousIndex) {
      return 'animate-slide-in-left';
    }
    return '';
  };

  const handleSwipe = (direction) => {
    const currentIndex = tabOrder.indexOf(activeTab);
    
    if (direction === 'LEFT' && currentIndex < tabOrder.length - 1) {
      setPreviousTab(activeTab);
      setActiveTab(tabOrder[currentIndex + 1]);
    }
    if (direction === 'RIGHT' && currentIndex > 0) {
      setPreviousTab(activeTab);
      setActiveTab(tabOrder[currentIndex - 1]);
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleSwipe('LEFT'),
    onSwipedRight: () => handleSwipe('RIGHT'),
    trackMouse: true,
  });

  return (
    <div className="animate-slide-in flex flex-col min-h-screen bg-purple-50">
      <div className="flex-grow p-4 overflow-y-auto">
        {/* Payment History Card */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-4 mt-4 shadow-md">
          <h2 className="text-white text-lg font-semibold">HISTORY</h2>
          <div className="flex items-center justify-between mt-2">
            <div className="relative w-24 h-24">
              <CircularProgressbar
                value={percentagePaymentsMade}
                text={`${percentagePaymentsMade.toFixed(0)}%`}
                strokeWidth={8}
                styles={{
                  path: { stroke: '#fff', strokeWidth: 8 },
                  trail: { stroke: 'rgba(255, 255, 255, 0.3)', strokeWidth: 8 },
                  text: { fill: '#fff', fontSize: '24px', fontWeight: 'bold' },
                }}
              />
            </div>
            <div className="text-white">
              <p className="text-sm">TOTAL CONTRIBUTIONS</p>
              <p className="font-bold text-lg mb-3">₦{totalContributions.toLocaleString()}</p>
              <p className="text-sm">REMAINING PAYMENTS</p>
              <p className="font-bold text-lg">₦{remainingPayments.toLocaleString()}</p>
            </div>
          </div>
          <div className="text-right mt-4">
            {/* <button className="text-white underline text-sm">View all</button> */}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-around mt-4 text-gray-700">
          {tabOrder.map(tab => (
            <button
              key={tab}
              className={`pb-2 ${activeTab === tab ? 'text-purple-600 border-b-2 border-purple-600' : ''}`}
              onClick={() => {
                setPreviousTab(activeTab);
                setActiveTab(tab);
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content with Animation */}
        <div {...swipeHandlers} className="mt-4">
          <div className={`transition-all duration-500 ${getAnimationClass()}`}>
            {activeTab === 'Stats' && <StatsTab />}
            {activeTab === 'Sessions' && <SessionsTab />}
            {activeTab === 'Goals' && <GoalsTab />}
            {activeTab === 'Members' && <MembersTab />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
