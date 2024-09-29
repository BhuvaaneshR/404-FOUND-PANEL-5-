import React, { useState, useRef, useEffect } from 'react';
import user from "../assets/user-profile.png";

function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null); // Create a ref for the dropdown menu

  // Function to toggle dropdown visibility
  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  // Function to close the dropdown
  const hideDropdown = () => {
    setDropdownVisible(false);
  };

  // Effect to handle clicks outside of the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        hideDropdown();
      }
    };

    // Attach event listener for clicks
    document.addEventListener('mousedown', handleClickOutside);
    
    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <nav className="header">
      <h1>EVENT MANAGEMENT SYSTEM</h1>
      <h1>Home</h1>
      <div className="dropdown" ref={dropdownRef} style={{ float: 'right' }}>
        <button className="btn" onClick={toggleDropdown}>
          <img style={{ border: 'none' }} src={user} width="36px" height="36px" alt="preferences" />
        </button>
        {dropdownVisible && (
          <ul className="nav-links">
            <li><a href="home.html">HOME</a></li>
            <li><a href="#" onClick={() => alert('Displaying My Events')}>My Events</a></li>
            <li><a href="#" onClick={() => alert('Show Add Event Form')}>Add Event</a></li>
            <li><a href="#" onClick={() => alert('Show Update Event Form')}>Update Event</a></li>
            <li><a href="#" onClick={() => alert('Show Delete Event Form')}>Delete Event</a></li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;