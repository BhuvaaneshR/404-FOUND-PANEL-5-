import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/participant.css';

function ParticipantPage() {
  return (
    <div className="participant-page">
      <Navbar/>
      <div className="event-grid">
        { /* 3D animated divs with upcoming events will be rendered here */ }
      </div>
    </div>
  );
}

export default ParticipantPage;