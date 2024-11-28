import React, { useState } from 'react';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false); // State for dark mode toggle
  const [username, setUsername] = useState(''); // State for username input
  const [email, setEmail] = useState(''); // State for email input
  const [error, setError] = useState(''); // Error message state
  const [successMessage, setSuccessMessage] = useState(''); // Success message state

  // Handle dark mode toggle
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  // Handle input changes (for username and email)
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'email') {
      setEmail(value);
    }
  };

  // Handle form submission for updating settings
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation for username and email
    if (!username || !email) {
      setError('Both fields are required!');
      return;
    }

    setError('');
    setSuccessMessage('Settings updated successfully!');
  };

  return (
    <div className="container mt-5">
      <h1>Settings</h1>

      {/* Error or Success messages */}
      {error && <div className="alert alert-danger">{error}</div>}
      {successMessage && <div className="alert alert-success">{successMessage}</div>}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control"
            value={username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="form-control"
            value={email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Dark Mode Toggle */}
        <div className="form-check">
          <input
            type="checkbox"
            id="darkMode"
            className="form-check-input"
            checked={darkMode}
            onChange={handleDarkModeToggle}
          />
          <label htmlFor="darkMode" className="form-check-label">Enable Dark Mode</label>
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Settings;
