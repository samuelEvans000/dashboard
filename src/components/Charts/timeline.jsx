import React from 'react';
import './styles.css';


const VerticalTimeline = ({ events }) => {
  return (
    <div className="vertical-timeline">
      {events.map((event, index) => (
        
        <div className="vertical-timeline-event" key={index}>
          <div className='timeline-icon'><div className='timeline-icon1'></div></div>
          <div className="vertical-timeline-event-content">
            <h5>{event.title}</h5>
            <h6>{event.description}</h6>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VerticalTimeline;
