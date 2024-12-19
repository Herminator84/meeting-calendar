import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

import "./styles/App.css";

function App() {
  const [meetings, setMeetings] = useState([]);
  const [meetingTitle, setMeetingTitle] = useState("");
  const [meetingDate, setMeetingDate] = useState("");
  const [meetingTime, setMeetingTime] = useState("");
  const [participants, setParticipants] = useState("");
  const [description, setDescription] = useState("");
  const [isFullDay, setIsFullDay] = useState(false); // New state for Full Day

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMeeting = {
      title: meetingTitle,
      date: meetingDate,
      time: isFullDay ? "Full Day" : meetingTime, // Adjust time if full-day
      participants,
      description,
    };
    setMeetings([...meetings, newMeeting]);
    setMeetingTitle("");
    setMeetingDate("");
    setMeetingTime("");
    setParticipants("");
    setDescription("");
    setIsFullDay(false); // Reset Full Day checkbox
  };

  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Navbar />
          <div className="meeting-form">
            <h1>Schedule a New Meeting</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Meeting Title</label>
                <input
                  type="text"
                  value={meetingTitle}
                  onChange={(e) => setMeetingTitle(e.target.value)}
                  placeholder="Enter meeting title"
                  required
                />
              </div>
              <div className="form-group">
                <label>Meeting Date</label>
                <input
                  type="date"
                  value={meetingDate}
                  onChange={(e) => setMeetingDate(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>
                  <input
                    type="checkbox"
                    checked={isFullDay}
                    onChange={(e) => setIsFullDay(e.target.checked)}
                  />
                  Full Day Meeting
                </label>
              </div>
              <div className="form-group">
                <label>Meeting Time</label>
                <input
                  type="time"
                  value={meetingTime}
                  onChange={(e) => setMeetingTime(e.target.value)}
                  disabled={isFullDay} // Disable when "Full Day" is selected
                  required={!isFullDay} // Required only if not "Full Day"
                />
              </div>
              <div className="form-group">
                <label>Participants</label>
                <input
                  type="text"
                  value={participants}
                  onChange={(e) => setParticipants(e.target.value)}
                  placeholder="Enter participant emails"
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter meeting description"
                ></textarea>
              </div>
              <button type="submit">Create Meeting</button>
            </form>
          </div>

          <div className="meeting-list">
            <h2>List of Created Meetings</h2>
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Meeting Title</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Participants</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {meetings.map((meeting, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{meeting.title}</td>
                    <td>{meeting.date}</td>
                    <td>{meeting.time}</td>
                    <td>{meeting.participants}</td>
                    <td>
                      <button>Edit</button>
                      <button>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>© 2024 Meeting Calendar. All rights reserved.</p>
      </footer>
    </Router>
  );
}

export default App;
