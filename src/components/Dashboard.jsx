
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const [meetings, setMeetings] = useState([
    { id: 1, title: "Team Meeting", date: "2024-12-01", time: "10:00 AM" },
    { id: 2, title: "Client Meeting", date: "2024-12-02", time: "02:00 PM" },
    { id: 3, title: "Product Update", date: "2024-12-03", time: "11:00 AM" },
  ]);

  
  const deleteMeeting = (id) => {
    setMeetings(meetings.filter(meeting => meeting.id !== id));
  };

  return (
    <div>
      <h1>Dashboard</h1>

      {/* Schedule Meeting Section */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Schedule Meeting</h5>
              <p className="card-text">Create a new meeting schedule.</p>
              <Link to="/schedule" className="btn btn-primary">Go to Schedule</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Manage Meetings, Users & Permissions Section */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Manage Meetings & Users</h5>
              <p className="card-text">Manage meetings and user permissions.</p>
              <Link to="/manage" className="btn btn-warning">Go to Management</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Notifications Section */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Notifications</h5>
              <p className="card-text">View recent meeting notifications.</p>
              <Link to="/notifications" className="btn btn-info">View Notifications</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Analytics Section */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Analytics</h5>
              <p className="card-text">View meeting analytics and insights.</p>
              <Link to="/analytics" className="btn btn-success">View Analytics</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Section */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Settings</h5>
              <p className="card-text">Manage your app settings.</p>
              <Link to="/settings" className="btn btn-danger">Go to Settings</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Meetings List Section */}
      <h2>Upcoming Meetings</h2>
      <div className="row">
        {meetings.map((meeting) => (
          <div key={meeting.id} className="col-12 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{meeting.title}</h5>
                <p className="card-text">{meeting.date} at {meeting.time}</p>
                <button className="btn btn-warning">Edit</button>
                <button 
                  className="btn btn-danger ms-2"
                  onClick={() => deleteMeeting(meeting.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
