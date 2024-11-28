import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Dashboard = ({ meetings = [], deleteMeeting, setEditMeeting }) => {
  return (
    <div className="container mt-5">
      {/* Page Header */}
      <h2 className="mb-4 text-center">Your Meetings</h2>

      {/* Conditional rendering for meetings */}
      {meetings.length === 0 ? (
        <div className="alert alert-info text-center">
          No meetings scheduled yet. Start by scheduling one!
        </div>
      ) : (
        <ul className="list-group">
          {meetings.map((meeting) => (
            <li
              key={meeting.id}
              className="list-group-item d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center"
            >
              {/* Meeting details */}
              <div>
                <h5 className="fw-bold">{meeting.title}</h5>
                <p className="text-muted mb-0">
                  {meeting.date} at {meeting.time}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="mt-3 mt-md-0">
                <button
                  className="btn btn-warning me-2"
                  onClick={() => setEditMeeting(meeting)}
                  title="Edit Meeting"
                >
                  <FontAwesomeIcon icon={faEdit} className="me-1" /> Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteMeeting(meeting.id)}
                  title="Delete Meeting"
                >
                  <FontAwesomeIcon icon={faTrash} className="me-1" /> Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Button to schedule a new meeting */}
      <div className="mt-4 text-center">
        <Link to="/schedule" className="btn btn-primary btn-lg">
          Schedule New Meeting
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
