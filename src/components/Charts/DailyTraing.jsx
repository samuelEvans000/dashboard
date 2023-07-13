import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";

const DailyTraining = () => {
  const labels = ["S", "M", "T", "W", "T", "F", "S", "S", "M", "T"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Last 7 Days",
        
        backgroundColor: "rgba(13, 98, 255, 0.80)",
        borderColor: "#000",
        marginTop: 10,
        data: [35, 60, 45, 65, 45, 75, 45, 35, 50, 45],
        borderRadius: 20,
        borderSkipped: false,
        barThickness: 8, 
      },
    ],
  };



  const options = {
    responsive: true,
    scales: {
      max: 160,
      x: {
        border:{
          display: false,
        },
        grid: {
          display: false,
        },
      },
      y: {
        border:{
          display: false,
        },
       
        ticks:{
          suggestedMin:0,
          suggestedMax: 160,
          steps: 5,
          stepSize: 40,
        },
      },
    },
    
  };
 

  
  return (
    <div>
      <Bar data={data} options={options}  />
    </div>
  );
};

export default DailyTraining;
