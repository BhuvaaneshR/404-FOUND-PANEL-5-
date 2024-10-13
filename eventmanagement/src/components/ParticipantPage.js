import React, { useState, useEffect } from 'react';
import '../styles/participant.css';

function ParticipantPage() {
  const [upcomingEvents, setUpcomingEvents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5555/eventss')
    .then((response) => response.json())
    .then((data) => {
      const upcoming = data.filter((event) => {
        const eventDate = new Date(event.datee);
        const today = new Date();
        return eventDate >= today;
      });
      setUpcomingEvents(upcoming);
    })
    .catch((error) => console.error(error));
  }, []);

  return (
    <div className="participant-page">
      <div className="event-grid">
        {upcomingEvents.map((e, index) => (
          <div key={index} className="event-card">
            <h2>{e.eventName}</h2>
            <p>{e.desc}</p>
            <p>Date: {e.datee}</p>
            <p>Start Time: {e.e_time}</p>
            <p>End Time: {e.en_time}</p>
            <p>Rules: {e.rules}</p>
            <p>Contact No: {e.contact}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ParticipantPage;