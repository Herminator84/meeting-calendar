import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ScheduleMeeting from "./components/ScheduleMeeting";
import "./styles/styles.css";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [meetings, setMeetings] = useState([]);
  const [editMeeting, setEditMeeting] = useState(null);

  // Toggle dark mode
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
    document.body.classList.toggle("dark", !darkTheme);
  };

  // Add a new meeting
  const addMeeting = (newMeeting) => {
    setMeetings([...meetings, newMeeting]);
  };

  // Delete a meeting
  const deleteMeeting = (id) => {
    setMeetings(meetings.filter((meeting) => meeting.id !== id));
  };

  // Edit a meeting
  const handleEdit = (updatedMeeting) => {
    setMeetings(
      meetings.map((meeting) =>
        meeting.id === updatedMeeting.id ? updatedMeeting : meeting
      )
    );
    setEditMeeting(null);
  };

  return (
    <Router>
      <div>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <div className="container">
            <h1 className="navbar-brand">Meeting Calendar</h1>
            <button className="btn btn-outline-secondary" onClick={toggleTheme}>
              {darkTheme ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <Dashboard
                meetings={meetings}
                deleteMeeting={deleteMeeting}
                setEditMeeting={setEditMeeting}
              />
            }
          />
          <Route
            path="/schedule"
            element={
              <ScheduleMeeting
                addMeeting={addMeeting}
                editMeeting={editMeeting}
                handleEdit={handleEdit}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
