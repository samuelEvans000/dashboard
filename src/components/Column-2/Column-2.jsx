import React from "react";
import "./Column-2.css"
import ChapterStatus from "../Charts/ChapterStatus";
import ActiveWorkers from "../Charts/ActiveWorkers";




function Column2() {
  return (
    <div className="column">
      <div className="status">
        <h4>Chapter Wise Status</h4>
          <div >
          <ChapterStatus />
          </div>
      </div>
      <div className="training">
        <h4> Last 14 Days Active Workers In Training</h4>
        <div className="bar">
            <ActiveWorkers/>
        </div>
      </div>
    </div>
  );
}

export default Column2;
