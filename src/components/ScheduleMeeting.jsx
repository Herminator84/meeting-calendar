import React, { useState } from 'react';

const ScheduleMeeting = ({ addMeeting }) => {
  const [meeting, setMeeting] = useState({
    title: '',
    date: '',
    time: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMeeting((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMeeting({
      ...meeting,
      id: Date.now(),
    });
    setMeeting({ title: '', date: '', time: '' });
  };

  return (
    <div className="container mt-5">
      <h2>Schedule a New Meeting</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Meeting Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            value={meeting.title}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="date" className="form-label">Meeting Date</label>
          <input
            type="date"
            className="form-control"
            id="date"
            name="date"
            value={meeting.date}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="time" className="form-label">Meeting Time</label>
          <input
            type="time"
            className="form-control"
            id="time"
            name="time"
            value={meeting.time}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Meeting</button>
      </form>
    </div>
  );
};

export default ScheduleMeeting;
