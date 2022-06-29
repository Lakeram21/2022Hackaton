import React from "react";
import "./RightBar.css";
import Orders from "./Orders";

function RightBar() {
  return (
    <div className="info-bar">
      <div className="username">
        <h1>
          Welcome <span>Phil!</span>
        </h1>
      </div>
      <div className="profile-picture">Profile</div>
      <div className="promotions">Promotions</div>
      <Orders />
      <div className="checkout-btn">Checkout</div>
    </div>
  );
}

export default RightBar;
