import React from "react";
import { Bar } from "react-chartjs-2";

const ActiveWorkers = () => {
  const labels = [
    "3 jun",
    "4 jun",
    "5 jun",
    "6 jun",
    "7 jun",
    "8 jun",
    "9 jun",
    "10 jun",
    "11 jun",
    "12 jun",
    "13 jun",
    "14 jun",
  ];

  const data = {
    labels: labels,
    datasets: [
      {
        
        backgroundColor: "rgba(13, 98, 255, 0.80)",
        borderColor: "#000",
        margin: 10,
        data: [100, 120, 115, 225, 255, 215, 230, 100, 280, 320, 380, 400],
        
        borderRadius: 20,
        borderSkipped: false,
        // barThickness: 15,
        barPercentage: 0.3,
      },
      
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
    scales: {
      x: {
        border:{
          display: false,
        },
        grid: {
         zeroLineColor:'transparent',
         display: false, // Remove x-axis gridlines
        },
      },
      y: {
        border:{
          display: false,
        },
        grid: {
          borderRadius: 20,
          display: false, // Remove y-axis gridlines
        },
        ticks: {
          min: 0,
          max: 400,
          stepSize: 100,
        },
      },
    },
  };

  return (
    
      <Bar
        data={data}
        options={options}
      />
    
  );
};

export default ActiveWorkers;
