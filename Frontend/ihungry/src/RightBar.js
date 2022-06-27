import React from "react";
import "./Orders";
import Orders from "./Orders";
import "./RightBar.css";

function RightBar() {
  return (
    <div className="info-bar">
      <div className="username">
        <h1>USERNAME</h1>
      </div>
      <div className="profile-picture">Profile</div>
      <div className="promotions">Promotions</div>
      <Orders />
    </div>
  );
}

export default RightBar;
