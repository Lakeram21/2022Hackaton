import React from "react";
import "./Sidebar.css";
import logo from './img/logo.png'
import {FaHome, FaReceipt, FaShoppingBag, FaHeart} from 'react-icons/fa'

function SideBar() {
  return (
    <div className="navbar">
      <div className="logo"><img src={logo} width='125px'></img></div>
      <div className="menu-icons"><span><FaHome/></span>Home</div>
      <div className="menu-icons"><span><FaReceipt/></span>Menu</div>
      <div className="menu-icons"><span><FaShoppingBag/></span>Orders</div>
      <div className="menu-icons"><span><FaHeart/></span>Favorites</div>
      
      <div></div>
    </div>
  );
}

export default SideBar;
