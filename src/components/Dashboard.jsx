import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Dashboard = ({ meetings, deleteMeeting }) => {
  return (
    <div className="container mt-5">
      <h2>Your Meetings</h2>
      {meetings.length === 0 ? (
        <p>No meetings scheduled yet. Start by scheduling one!</p>
      ) : (
        <ul className="list-group">
          {meetings.map((meeting) => (
            <li
              key={meeting.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              <strong>{meeting.title}</strong> - {meeting.date} at {meeting.time}
              <div>
                <button
                  className="btn btn-warning me-2"
                  title="Edit Meeting"
                >
                  <FontAwesomeIcon icon={faEdit} /> Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteMeeting(meeting.id)}
                  title="Delete Meeting"
                >
                  <FontAwesomeIcon icon={faTrash} /> Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="mt-4 text-center">
        <Link to="/schedule" className="btn btn-primary btn-lg">
          Schedule New Meeting
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
