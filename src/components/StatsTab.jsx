import React from 'react';

const StatsTab = () => (
  <div className="flex flex-col space-y-4">
    {/* Graph Section */}
    <div className="bg-white rounded-2xl p-4 shadow-md">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-lg">Contribution Progress</h3>
        <p className="text-sm text-gray-500">Weekly</p>
      </div>
      <div className="mt-4">
        <svg className="w-full h-32">
          <polyline
            fill="none"
            stroke="#7E3AF2"
            strokeWidth="3"
            points="10,30 60,20 100,40 150,10 200,30 240,50 290,20"
          />
        </svg>
      </div>
    </div>

    {/* Stats Widgets */}
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-purple-600 rounded-2xl p-4 text-white shadow-md">
        <p className="text-sm">Total Collected</p>
        <p className="text-2xl font-bold mt-2">₦500,000</p>
        <p className="text-sm mt-1">This Week</p>
      </div>

      <div className="bg-orange-500 rounded-2xl p-4 text-white shadow-md">
        <p className="text-sm">Active Sessions</p>
        <p className="text-2xl font-bold mt-2">10</p>
        <p className="text-sm mt-1">Running</p>
      </div>

      <div className="bg-blue-500 rounded-2xl p-4 text-white shadow-md col-span-2">
        <p className="text-sm">Average Weekly Contribution</p>
        <p className="text-2xl font-bold mt-2">₦20,000</p>
      </div>
    </div>
  </div>
);

export default StatsTab;
