import React, { useState, useEffect } from "react";
import "../styles/organizer.css";
import u_logo from "../assets/user-profile.png";

function EventManagementSystem() {
  const [showForm, setShowForm] = useState("");
  const [bookList, setBookList] = useState([]);
  const [book, setBook] = useState({
    eventName: "",
    desc: "",
    datee: "",
    e_time: "",
    en_time:"",
    rules: "",
    contact: "",
  });

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setBook({ ...book, [name]: value });
  };
  const [poster, setPoster] = useState(null);

  const handlePosterChange = (e) => {
    setPoster(e.target.files[0]);
  };

  const handleAddBook = (event) => {
    event.preventDefault();
    if (!validateForm()) return;
    // Send a POST request to the server to add the book
    console.log("Add book:", book);
    // Reset the form
    setBook({
      eventName: "",
      desc: "",
      datee: "",
      e_time: "",
      en_time:"",
      rules: "",
      contact: "",
    });
    setPoster(null);
  };

  const handleEditBook = (event) => {
    event.preventDefault();
    // Send a POST request to the server to edit the book
    console.log("Edit Event:", book);
    // Reset the form
    setBook({
      eventName: "",
      desc: "",
      datee: "",
      e_time: "",
      en_time:"",
      rules: "",
      contact: "",
    });
  };

  const handleDeleteBook = (event) => {
    event.preventDefault();
    // Send a POST request to the server to delete the book
    console.log("Delete Event:", book);
    // Reset the form
    setBook({
      eventName: "",
      desc: "",
      datee: "",
      e_time: "",
      en_time:"",
      rules: "",
      contact: "",
    });
  };

  const validateForm = () => {
    if (book.eventName.length < 3) {
      alert("Event name must be at least 3 characters long.");
      return false;
    }
    if (book.desc === "" || book.datee === "") {
      alert("Date and description are required.");
      return false;
    }
    if (book.e_time <= 0 || book.en_time <= 0) {
      alert("Time must be a positive number.");
      return false;
    }
    if (book.contact === "") {
      alert("Category is required.");
      return false;
    }
    return true;
  };

  const displayBooks = () => {
    // Send a POST request to the server to fetch books
    // For demonstration purposes, I'm using a mock API
    const mockBooks = [
      {
        eventName: "TechTopia",
        desc: "The event was fantastic fabulous ",
        datee: "02-10-2024",
        e_time: "08:00",
        en_time: "17:00",
        rules: "follow the speciifed rules",
        contact: "6369106579",
      },
      {
        eventName: "Tech-a-twist",
        desc: "ThThe event was fantastic fabulous ",
        datee: "03-10-2024",
        e_time: "09:00",
        en_time: "15:00",
        rules: " follow the speciifed rules",
        contact: "6369106579",
      },
    ];
    setBookList(mockBooks);
  };

  const goBackToMenu = () => {
    setShowForm("");
    setBookList([]);
  };

  useEffect(() => {
    if (showForm === "displayForm") {
      displayBooks();
    }
  }, [showForm]);

  return (
    <div>
      <nav className="header">
        <h1>EVENT MANAGEMENT SYSTEM</h1>
        <div className="dropdown" style={{ float: "right" }}>
          <button className="btn">
            <img
              style={{ border: "none" }}
              src={u_logo}
              width="36px"
              height="36px"
              alt="preferences"
            />
          </button>
          <ul className="nav-links">
            <li>
              <a href="#" onClick={() => setShowForm("addForm")}>
                Add Event
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setShowForm("editForm")}>
                Edit Event
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setShowForm("deleteForm")}>
                Delete Event
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setShowForm("displayForm")}>
                View Events
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {showForm === "addForm" && (
        <div id="addForm" className="form-container">
          <form onSubmit={handleAddBook}>
            <input type="hidden" name="action" value="add" />
            <label htmlFor="eventName">Event Name:</label>
            <input
              type="text"
              id="eventName"
              name="eventName"
              value={book.eventName}
              onChange={handleFormChange}
              required
            />
            <br />
            <br />
            <label htmlFor="desc">Event Description:</label>
            <input
              type="text"
              id="desc"
              name="desc"
              value={book.desc}
              onChange={handleFormChange}
              required
            />
            <br />
            <br />
            <label htmlFor="datee">Event Date:</label>
            <input
              type="date"
              id="datee"
              name="datee"
              value={book.datee}
              onChange={handleFormChange}
              required
            />
            <br />
            <br />
            <label htmlFor="e_time">Start Time:</label>
            <input
              type="time"
              id="e_time"
              name="e_time"
              value={book.e_time}
              onChange={handleFormChange}
            />
            <br />
            <br />
            <label htmlFor="en_time">End Time:</label>
            <input
              type="time"
              id="en_time"
              name="en_time"
              value={book.en_time}
              onChange={handleFormChange}
            />
            <br />
            <br />
            <label htmlFor="rules">Rules :</label>
            <input
              type="text"
              id="rules"
              name="rules"
              value={book.rules}
              onChange={handleFormChange}
              required
            />
            <br />
            <br />
            <label htmlFor="contact">Contact No:</label>
            <input
              type="number"
              id="contact"
              name="contact"
              value={book.contact}
              onChange={handleFormChange}
              required
            />
            <br />
            <br />
            <label htmlFor="poster">Event Poster:</label>
            <input
              type="file"
              id="poster"
              name="poster"
              onChange={(e) => handlePosterChange(e)}
              required
            />
            <br />
            <br />
            <div className="bt">
              <input className="b" type="submit" value="Add Event" />
              <button type="button" onClick={goBackToMenu}>
                Back
              </button>
            </div>
          </form>
        </div>
      )}
      {showForm === "editForm" && (
        <div id="editForm" className="form-container">
          <form onSubmit={handleEditBook}>
            <input type="hidden" name="action" value="edit" />
            <label htmlFor="e_id">Event id:</label>
            <input type="number" id="e_id" name="e_id" required />
            <br />
            <br />
            <label htmlFor="event_name">Event Name:</label>
            <input
              type="text"
              id="event_name"
              name="eventName"
              value={book.eventName}
              onChange={handleFormChange}
              required
            />
            <br />
            <br />
            <label htmlFor="desc">Event Description :</label>
            <input
              type="text"
              id="desc"
              name="desc"
              value={book.desc}
              onChange={handleFormChange}
              required
            />
            <br />
            <br />
            <label htmlFor="datee">Event Date:</label>
            <input
              type="date"
              id="datee"
              name="datee"
              value={book.datee}
              onChange={handleFormChange}
              required
            />
            <br />
            <br />
            <label htmlFor="e_time">Start Time:</label>
            <input
              type="time"
              id="e_time"
              name="e_time"
              value={book.e_time}
              onChange={handleFormChange}
            />
            <br />
            <br />
            <label htmlFor="en_time">End Time:</label>
            <input
              type="time"
              id="en_time"
              name="en_time"
              value={book.en_time}
              onChange={handleFormChange}
            />
            <br />
            <br />
            <label htmlFor="rules">Rules:</label>
            <input
              type="text"
              id="rules"
              name="rules"
              value={book.rules}
              onChange={handleFormChange}
              required
            />
            <br />
            <br />
            <label htmlFor="contact">Contact No:</label>
            <input
              type="text"
              id="contact"
              name="contact"
              value={book.contact}
              onChange={handleFormChange}
              required
            />
            <br />
            <br />
            <div className="bt">
              <input className="b" type="submit" value="Edit Book" />
              <button type="button" onClick={goBackToMenu}>
                Back
              </button>
            </div>
          </form>
        </div>
      )}
      {showForm === "deleteForm" && (
        <div id="deleteForm" className="form-container">
          <form onSubmit={handleDeleteBook}>
            <input type="hidden" name="action" value="delete" />
            <label htmlFor="e_id">Event id:</label>
            <input type="number" id="e_id" name="e_id" required />
            <br />
            <br />
            <div className="bt">
              <input className="b" type="submit" value="Delete Book" />
              <button type="button" onClick={goBackToMenu}>
                Back
              </button>
            </div>
          </form>
        </div>
      )}
      {showForm === "displayForm" && (
        <div id="bookList" className="form -container">
          <h2>Book List</h2>
          <table>
            <thead>
              <tr>
                <th>Event Name</th>
                <th>Event Description</th>
                <th>Event Date</th>
                <th>Start Time</th>
                <th>End Time</th>
                <th>Rules</th>
                <th>Contact No</th>
              </tr>
            </thead>
            <tbody>
              {bookList.map((book, index) => (
                <tr key={index}>
                  <td>{book.eventName}</td>
                  <td>{book.desc}</td>
                  <td>{book.datee}</td>
                  <td>{book.e_time}</td>
                  <td>{book.en_time}</td>
                  <td>{book.rules}</td>
                  <td>{book.contact}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button type="button" onClick={goBackToMenu}>
            Back
          </button>
        </div>
      )}
      {showForm === "" && (
        <div id="main-menu">
          <button onClick={() => setShowForm("addForm")}>Add Event</button>
          <button onClick={() => setShowForm("editForm")}>Edit Event</button>
          <button onClick={() => setShowForm("deleteForm")}>
            Delete Event
          </button>
          <button onClick={() => setShowForm("displayForm")}>
            View Events
          </button>
        </div>
      )}
      <section id="about" className="about-container">
        <h2>About the Event Management System</h2>
        <p>
          Welcome to our event management platform! Here, you can easily
          discover and stay updated on a wide range of exciting events, from
          social gatherings and workshops to conferences and more. Our platform
          allows you to browse upcoming events, view detailed descriptions,
          dates, and times, and find something that sparks your interest. For
          organizers, we provide a seamless way to create, manage, and promote
          events effortlessly. Whether you’re attending or organizing, our
          platform is designed to make event planning and participation simple
          and enjoyable for everyone. Explore now and don’t miss out on the
          latest events!
        </p>
      </section>
    </div>
  );
}

export default EventManagementSystem;
