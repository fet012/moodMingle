// import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const MoodChart = () => {
  const data = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    datasets: [
      {
        label: 'Mood Score',
        data: [3, 4, 2, 5, 4, 3, 5],
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderWidth: 2,
        pointBackgroundColor: '#fff',
        pointBorderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.4, 
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        labels: {
          color: '#fff', 
          font: {
            size: 16,
          },
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#fff', 
        },
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          color: '#fff', 
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.2)', 
        },
      },
    },
  };

  return (
    <div className="bg-gradient-to-r from-green-400 to-blue-500 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-white mb-4">Mood Analytics</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default MoodChart
