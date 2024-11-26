
import React, { useState } from 'react';

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "New meeting scheduled for December 1st at 10:00 AM", read: false },
    { id: 2, message: "Meeting with client rescheduled to December 2nd at 2:00 PM", read: false },
    { id: 3, message: "Product update released for version 1.2", read: true },
  ]);

  const markAsRead = (id) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const deleteNotification = (id) => {
    setNotifications(notifications.filter((notification) => notification.id !== id));
  };

  return (
    <div>
      <h1>Notifications</h1>
      <div className="list-group">
        {notifications.map((notification) => (
          <div key={notification.id} className={`list-group-item ${notification.read ? 'list-group-item-secondary' : ''}`}>
            <div className="d-flex justify-content-between align-items-center">
              <p className="mb-0">{notification.message}</p>
              <div>
                <button
                  className="btn btn-success btn-sm me-2"
                  onClick={() => markAsRead(notification.id)}
                  disabled={notification.read}
                >
                  {notification.read ? 'Read' : 'Mark as Read'}
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteNotification(notification.id)}
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

export default Notifications;
