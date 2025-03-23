import React from "react";
import "./AccountSettings.css";

const AccountSettings = () => {
  return (
    <div className="account-settings-container">
        
      <div className="account-settings-card">
        <h2 className="account-settings-title">Account Settings</h2>
        <div className="profile-section">
          <img
            src="https://randomuser.me/api/portraits/women/45.jpg"
            alt="Profile"
            className="profile-picture"
          />
          <div className="profile-info">
            <h3 className="profile-name">Marry Doe</h3>
            <p className="profile-email">Marry@gmail.com</p>
          </div>
        </div>
        <p className="profile-description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed diam nonumy 
          eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam.
        </p>
      </div>
    </div>
  );
};

export default AccountSettings;
