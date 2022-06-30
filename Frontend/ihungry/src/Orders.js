import React, { useContext} from 'react'
import "./Orders.css";
import { OrderContext } from './App'
import foodorder from './img/foodorder.png'


function Orders() {
  const {selectedItem, setSelectedItem} = useContext(OrderContext)
  console.log(selectedItem)
  return (
    <div className="orders">
      <h1 className="orders-title">Order Summary</h1>
      {selectedItem?.length > 0 ? selectedItem.map(({price, name}) => (
        <div className="orders-items">
          <div className='image-orders'>
            <img src={foodorder}></img>
          </div>
          <div className='name-order'><p>{name}</p></div>
          <div className='price-orders'>${price}</div>
        </div>
      )):<p>No Items</p>} 
    </div>
  );
}

export default Orders;
