import "./App.css";
import MainMenu from "./MainMenu";
import SideBar from "./SideBar";
import RightBar from "./RightBar";
import Checkout from "./controller/Checkout";
import MenuItem from "./MenuItem";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RestaurantPage from "./RestaurantPage";
import { useState } from "react";

// export const CategoryContext = createContext();

function App() {

 
  
  return (
    <div className="App">
      <header className="App-header"></header>

      <Router>
        <SideBar />
        <RightBar />
        <Routes>
          <Route path="/" exact element={<MainMenu />} />
          <Route path="/Checkout" exact element={<Checkout />} />
          <Route path='/restaurantpage' exact element={<RestaurantPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
