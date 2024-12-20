import React from "react";
import { Link } from "react-router-dom";
import "../styles/App.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Meeting Calendar</h2>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/schedule">Schedule Meeting</Link>
        <Link to="/manage">Manage Meetings</Link>
        <Link to="/notifications">Notifications</Link>
        <Link to="/settings">Settings</Link>
        <Link to="/invitations">Invitations</Link> {/* New link for Invitations */}
      </nav>
    </div>
  );
};

export default Sidebar;
