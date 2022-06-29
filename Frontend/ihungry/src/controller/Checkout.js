import React, { useState } from "react";
import "./Checkout.css";
import axios from "axios";

function Checkout({ order }) {
  const [formData, updateFormData] = useState([]);

  const name = "Hello";
  const options = ["Rice", "Meat", "Chicken"];

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);

    axios
      .post(`http://localhost:8080/orders/create`, {
        customerEmail: "Test@gmail.com",
        customerName: "Test",
        resturant: "Test",
        location: "Test",
        quantity: 0,
        price: 0,
        status: "Order",
        item: options,
      })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="checkout">
      <form className="form">
        <fieldset className="checkout_form">
          <label>Customer Name:</label>
          <input type="text" name="cutomerName" value={name} readOnly />
          <label>Resturant:</label>
          <input type="text" name="resturant" value={name} readOnly />
          <label>Items:</label>
          {options.map((option) => (
            <input type="text" name={option.value} value={option} readOnly />
          ))}
          <label>Quantity:</label>
          <input type="text" name="quantity" value={name} readOnly />
          <label>Location: </label>
          <input type="text" name="location" value={name} readOnly />
        </fieldset>
        <fieldset className="checkout_form">
          <label>Credit Card Number</label>
          <input
            type="text"
            name="card_number"
            placeholder="0000-0000-0000-0000"
            onChange={handleChange}
          />
          <label>Security Code</label>
          <input type="number" name="security_code" onChange={handleChange} />
          <label> Expiration Date</label>
          <input type="text" name="expiration" onChange={handleChange} />
        </fieldset>
        <button type="submit" onClick={handleSubmit}>
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;
