import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/Navbar';
import ParticipantPage from './components/ParticipantPage';
import OrganizerPage from './components/OrganizerPage';

const userRole = 'organizer'; // Define the user role here

function App() {
  return (
    <div className="app">
      <div className="page-content">
        {userRole === 'participant' ? <ParticipantPage /> : <OrganizerPage />}
      </div>
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
