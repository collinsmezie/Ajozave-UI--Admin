import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const StatsTab = () => {
  // Bar chart data and options
  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Contributions',
        data: [50, 70, 60, 90, 80, 100, 120],
        backgroundColor: 'rgba(126, 58, 242, 0.8)',
        borderRadius: 8,
        barThickness: 20,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: '#F1F1F1',
        },
        ticks: {
          color: '#9CA3AF',
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#9CA3AF',
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="flex flex-col space-y-4">
      {/* Graph Section */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-lg">Contribution Progress</h3>
          <p className="text-sm text-gray-500">Weekly</p>
        </div>
        <div className="mt-4 h-40">
          <Bar data={chartData} options={chartOptions} />
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
};

export default StatsTab;
