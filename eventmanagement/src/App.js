import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import OrganizerPage from './components/OrganizerPage';
import comp from './components/comp';

function App() {
  return (
    <div className="app">
      <OrganizerPage />
    </div>
  );
}

export default App;

