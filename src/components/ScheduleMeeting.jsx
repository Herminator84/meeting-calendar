import React, { useState, useEffect } from "react";

const ScheduleMeeting = ({ addMeeting, editMeeting, handleEdit }) => {
  const [meetingData, setMeetingData] = useState({
    id: null,
    title: "",
    date: "",
    time: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Populate form if editing
  useEffect(() => {
    if (editMeeting) {
      setMeetingData(editMeeting);
    }
  }, [editMeeting]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMeetingData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // Basic validation
    if (!meetingData.title || !meetingData.date || !meetingData.time) {
      setError("All fields are required.");
      setLoading(false);
      return;
    }

    try {
      if (editMeeting) {
        handleEdit(meetingData); // Update existing meeting
      } else {
        addMeeting({ ...meetingData, id: Date.now() }); // Add new meeting
      }

      // Reset form after successful submission
      setMeetingData({ id: null, title: "", date: "", time: "" });
    } catch (error) {
      setError("An error occurred while submitting the form.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <h2>{editMeeting ? "Edit Meeting" : "Schedule a New Meeting"}</h2>
      {error && <div className="alert alert-danger">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title">Meeting Title</label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-control"
            value={meetingData.title}
            onChange={handleChange}
            required
            aria-describedby="title-help"
          />
          <small id="title-help" className="form-text text-muted">
            Enter the title of the meeting.
          </small>
        </div>
        <div className="mb-3">
          <label htmlFor="date">Meeting Date</label>
          <input
            type="date"
            id="date"
            name="date"
            className="form-control"
            value={meetingData.date}
            onChange={handleChange}
            required
            aria-describedby="date-help"
          />
          <small id="date-help" className="form-text text-muted">
            Choose a date for the meeting.
          </small>
        </div>
        <div className="mb-3">
          <label htmlFor="time">Meeting Time</label>
          <input
            type="time"
            id="time"
            name="time"
            className="form-control"
            value={meetingData.time}
            onChange={handleChange}
            required
            aria-describedby="time-help"
          />
          <small id="time-help" className="form-text text-muted">
            Set the meeting time.
          </small>
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Submitting..." : editMeeting ? "Update Meeting" : "Add Meeting"}
        </button>
      </form>
    </div>
  );
};

export default ScheduleMeeting;
