import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/Navbar';
import ParticipantPage from './components/ParticipantPage';
import OrganizerPage from './components/OrganizerPage';

const userRole = 'participant'; // Define the user role here

function App() {
  return (
    <div className="app">
      <ParticipantPage/>
      <div className="page-content">
      </div>
    </div>
  );
}

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
