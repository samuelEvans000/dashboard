import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";

const ChapterStatus = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const labels = ["Finished chapters", "Chapter A", "Chapter B", "Chapter C", "Haven't Started"];
  const data = [22, 20, 7, 22, 34];
  const colors = ["#B4CEFF", "rgba(51, 51, 51, 0.30)", " #8400D5", "#425F57","#ED1C24"];
  

  const handleElementClick = (event, elements) => {
    if (elements.length > 0) {
      const index = elements[0].index;
      setActiveIndex(index);
    } else {
      setActiveIndex(null);
    }
  };

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: colors,
        
      },
    ],
  };


  const options = {
    responsive: true,
    elements:{
      center:{
       
      }
    },
    plugins: {
      legend: {
        display: false,
      },
      doughnutLabel: {
        labels: [
          {
            render: (args) => {
              const { index, dataset } = args;
              const value = dataset.data[index];
              return `${value}%`;
            },
            font:{
              size:20,
            },
            fontColor: "#000",
          },
        ],
      },
  
    },
    onClick: handleElementClick,
    cutout: "50%", // Adjust the size of the inner circle
    
  };

  return (
    <div>
      <Doughnut data={chartData} options={options} />
      {activeIndex !== null && (
        <div >
          <h3 className="chart-label">{labels[activeIndex]}</h3>
        </div>
      )}
    </div>
  );
};

export default ChapterStatus;
