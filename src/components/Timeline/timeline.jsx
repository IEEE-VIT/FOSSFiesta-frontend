import React from "react";
import "./timeline.styles.css";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import Icon from "../icons/icons"
const Timeline = () => {
  const peachbg = '#F4F0E1'
  return <div>
   <h1 className="timeline-title">
     Timeline
   </h1>
  <VerticalTimeline>
    <VerticalTimelineElement
      className="vertical-timeline-element--session"
      contentStyle={{ background:  '#F4F0E1', color: '#FF8351' }}
      contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
      date="October 2 : 11:00 AM - 01:00 PM IST"
      iconStyle={{ background: '#F4F0E1', color: '#fff' }}
      icon={<Icon id="0"/>}
    >
      <h3 className="vertical-timeline-element-title">Open Source Takeover</h3>
      {/* <h4 className="vertical-timeline-element-subtitle">Session 1</h4> */}
      <p>
      Beginner-friendly Introduction to GitHub. Learn everything and more about the world of open source.
      </p>
    </VerticalTimelineElement>

    <VerticalTimelineElement
      className="vertical-timeline-element--session"
      date="October 2: 4:00 PM - 06:00 PM IST"
      contentStyle={{ background: '#F4F0E1', color: '#FF8351' }}
      iconStyle={{ background: '#F4F0E1', color: '#fff' }}
      icon={<Icon id="1"/>}
    >
      <h3 className="vertical-timeline-element-title">Git.Set.Go</h3>
      {/* <h4 className="vertical-timeline-element-subtitle">Session 2</h4> */}
      <p>
      Excited about open source? Join us in this interactive session and let’s find your first Pull Request together!
      </p>
    </VerticalTimelineElement>
   
    <VerticalTimelineElement
      className="vertical-timeline-element--event"
      date="October 2 : 6:00 PM - 02:00 AM IST"
      contentStyle={{ background: '#F4F0E1', color: '#FF8351' }}
      iconStyle={{ background: '#F4F0E1', color: '#fff'}}
      icon={<Icon id="2"/>}
    >
      <h3 className="vertical-timeline-element-title">Code Sprint</h3>
      {/* <h4 className="vertical-timeline-element-subtitle">Event</h4> */}
      <p>
      One of the most eagerly anticipated competitions from us during HacktoberFest, as you will be competing in an 8-hour sprint.
      </p>
    </VerticalTimelineElement>
 
  </VerticalTimeline>
  {/* background-color: #2b3531;
    border: 2.02899px solid #B04814; */}

  </div>;
};

export default Timeline;
