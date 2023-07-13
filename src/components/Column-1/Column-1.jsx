/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Column-1.css";
import training from "../../images/training.png";
import video from "../../images/video.png";
// import { Line } from "react-chartjs-2";

const Column1 = () => {
  return (
    <>
    <div className="weekly">
      <div className="weekly-progress">
        <h4>In Training Workers</h4>
        <div className="sub-progress">
          <div className="digits">
            <h3>3,354</h3>
            <div className="per-value">
              <h6 className="mini-digit">20%</h6>
              <h5>234</h5>
            </div>
          </div>
          <div className="graph">
          <img src={training}></img>
            <div className="days">
              <h6>M</h6>
              <h6>T</h6>
              <h6>W</h6>
              <h6>T</h6>
              <h6>F</h6>
              <h6>S</h6>
              <h6>S</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="weekly-progress">
        <h4>Video Watch-Time(Hrs)</h4>
        <div className="sub-progress">
          <div className="digits">
            <h3>3,354</h3>
            <div className="per-value">
              <h6 className="mini-digit">20%</h6>
              <h5>234</h5>
            </div>
          </div>
          <div className="graph">
            <img src={video}></img>
            <div className="days">
              <h6>M</h6>
              <h6>T</h6>
              <h6>W</h6>
              <h6>T</h6>
              <h6>F</h6>
              <h6>S</h6>
              <h6>S</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="weekly-progress">
        <h4>% Workers Passing Quiz</h4>
        <div className="sub-progress">
          <div className="digits">
            <h3>3,354</h3>
            <div className="per-value">
              <h6 className="mini-digit">20%</h6>
              <h5>234</h5>
            </div>
          </div>
          <div className="graph">
            <img src={training}></img>
            <div className="days">
              <h6>M</h6>
              <h6>T</h6>
              <h6>W</h6>
              <h6>T</h6>
              <h6>F</h6>
              <h6>S</h6>
              <h6>S</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="weekly-progress">
        <h4>Avg. Days Taken</h4>
        <div className="sub-progress">
          <div className="digits">
            <h3>3,354</h3>
            <div className="per-value">
              <h6 className="mini-digit">20%</h6>
              <h5>234</h5>
            </div>
          </div>
          <div className="graph">
            <img src={training}></img>
            <div className="days">
              <h6>M</h6>
              <h6>T</h6>
              <h6>W</h6>
              <h6>T</h6>
              <h6>F</h6>
              <h6>S</h6>
              <h6>S</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Column1;
