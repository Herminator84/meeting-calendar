// src/components/Manage.jsx
import React, { useState } from 'react';

const Manage = () => {
  const [meetings, setMeetings] = useState([
    { id: 1, title: "Team Meeting", date: "2024-12-01", time: "10:00 AM" },
    { id: 2, title: "Client Meeting", date: "2024-12-02", time: "02:00 PM" },
    { id: 3, title: "Product Update", date: "2024-12-03", time: "11:00 AM" },
  ]);

  const [users, setUsers] = useState([
    { id: 1, name: "Britt Doe", email: "britt.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
    { id: 3, name: "Bjorn Johnson", email: "bjorn.johnson@example.com" },
  ]);

  const deleteMeeting = (id) => {
    setMeetings(meetings.filter((meeting) => meeting.id !== id));
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div>
      <h1>Manage Meetings & Users</h1>

      {/* Manage Meetings Section */}
      <div className="mt-4">
        <h2>Meetings</h2>
        <div className="row">
          {meetings.map((meeting) => (
            <div key={meeting.id} className="col-12 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{meeting.title}</h5>
                  <p className="card-text">
                    {meeting.date} at {meeting.time}
                  </p>
                  <button className="btn btn-warning me-2">Edit</button>
                  <button
                    className="btn btn-danger"
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

      {/* Manage Users Section */}
      <div className="mt-4">
        <h2>Users</h2>
        <div className="row">
          {users.map((user) => (
            <div key={user.id} className="col-12 mb-3">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-text">{user.email}</p>
                  <button className="btn btn-warning me-2">Edit</button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteUser(user.id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Manage;
