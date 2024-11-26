import React, { useState } from "react";

const ScheduleMeeting = () => {
  const [meetingData, setMeetingData] = useState({
    title: '',
    date: '',
    time: '',
  });

  const [error, setError] = useState(''); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeetingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    
    if (!meetingData.title || !meetingData.date || !meetingData.time) {
      setError("All fields are required.");
      return;
    }

    
    setError('');
    setMeetingData({
      title: '',
      date: '',
      time: '',
    });

    // Here you would typically send the data to an API, e.g. using fetch()
  };

  return (
    <div className="container">
      <h1 className="my-4">Schedule a New Meeting</h1>
      <form onSubmit={handleSubmit}> {/* Fixed onSubmit typo */}
        {error && <div className="alert alert-danger">{error}</div>} {/* Fixed closing div tag */}

        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Meeting Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-control"
            value={meetingData.title}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input
            type="date"
            id="date"
            name="date"
            className="form-control"
            value={meetingData.date}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="time" className="form-label">
            Time
          </label>
          <input
            type="time"
            id="time"
            name="time"
            className="form-control"
            value={meetingData.time}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Schedule Meeting
        </button>
      </form>
    </div>
  );
};

export default ScheduleMeeting;
