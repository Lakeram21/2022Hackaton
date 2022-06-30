import "./App.css";
import MainMenu from "./MainMenu";
import SideBar from "./SideBar";
import RightBar from "./RightBar";
import Checkout from "./controller/Checkout";
import MenuItem from "./MenuItem";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RestaurantPage from "./RestaurantPage";
import { useState, useContext, createContext } from "react";

export const OrderContext = createContext();

function App() {

  const [selectedItem, setSelectedItem] = useState([])
 
  
  return (
    <div className="App">
      <header className="App-header"></header>
      <OrderContext.Provider value={{selectedItem, setSelectedItem}}>
        <Router>
          <SideBar />
          <RightBar />
          <Routes>
            <Route path="/" exact element={<MainMenu />} />
            <Route path="/Checkout" exact element={<Checkout />} />
            <Route path='/restaurantpage' exact element={<RestaurantPage />} />
          </Routes>
        </Router>
      </OrderContext.Provider>
    </div>
  );
}

export default App;
