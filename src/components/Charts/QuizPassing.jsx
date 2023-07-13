import React from "react";
// import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import "../Column-3/Column-3.css"
const labels = ["Passed", "Failed"];
const data = {
    labels: labels,
  datasets: [
    {
      
     
      data: [70, 30],
      backgroundColor: ["green", "red"],
    },
  ],  
};
const options = {
  responsive: true,
}
const QuizPassing = () => {
  return (
    <div className="">
      <Doughnut data={data} options={options} />
    </div>
  );
};
export default QuizPassing;