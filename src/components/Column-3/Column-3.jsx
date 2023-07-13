import React from "react";
import "./Column-3.css";
import VerticalTimeline from "../Charts/timeline";
import QuizPassing from "../Charts/QuizPassing";
import DailyTraining from "../Charts/DailyTraing";

function Column3() {
    const events = [
        {
            title: 'Course a',
            description: '23 workers took this course this week',
        },
        {
            title: 'Course a',
            description: '23 workers took this course this week',
        },
        {
            title: 'Course a',
            description: '23 workers took this course this week',
        },
        {
            title: 'Course a',
            description: '23 workers took this course this week',
        }
    ];
  return (
    <div className="column">
      <div className="monthly">
        <h4>monthly training activity</h4>
        <div>
        <VerticalTimeline events={events}/>
        </div>
      </div>
      <div className="passing">
        <h4> quiz passing %</h4>
        <div className="pie2">
            <QuizPassing/>
        </div>
      </div>
      <div className="daily">
        <h4>daily training completions</h4>
        <div className="dailytraining">
            <DailyTraining/>
        </div>
      </div>
    </div>
  );
}

export default Column3;
