import React, { useContext } from "react";
import "./RightBar.css";
import Orders from "./Orders";
import promo from './img/promo.png'
import { OrderContext } from "./App";
import avatar from './img/avatar.png'
function RightBar() {
  
  return (
    <div className="info-bar">
      <div className="username">
        <h1>
          Welcome <span>Phil!</span>
        </h1>
      </div>
      <div className="profile-picture"><img src={avatar} style={{borderRadius:'50px'}}></img></div>
      <img className="promotions" src={promo}></img>
      <Orders />
      <div className="checkout-btn">Checkout</div>
    </div>
  );
}

export default RightBar;
