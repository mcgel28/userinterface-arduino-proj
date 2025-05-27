import React, { useState } from 'react';
import './Settings.css';

const Settings = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="settings-section">
      <h2>Settings</h2>

      <div className="setting-item">
        <label>
          <span>Enable Notifications</span>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
        </label>
      </div>

      <div className="setting-item">
        <label>
          <span>Dark Mode</span>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
        </label>
      </div>

      <div className="setting-item">
        <button className="logout-button">Log Out</button>
      </div>
    </div>
  );
};

export default Settings;
