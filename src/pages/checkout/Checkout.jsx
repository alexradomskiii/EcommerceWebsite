import React, { useContext } from "react";
import { ShopContext } from "../../context/Shop-context";
import "./Checkout.css";

export const Checkout = () => {
  const { getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <div className="top">
      {totalAmount > 0 ? (
        <div className="checkout">
          <h1>Checkout</h1>
          <p>Subtotal: ${totalAmount}</p>
          <form id="contact-form" method="POST">
              <div className="name-container">
                  <div className="input-container">
                      <label htmlFor="first">First Name</label>
                      <input id="first" name="first" type="text" />
                  </div>
                  <div className="input-container">
                      <label htmlFor="last">Last Name</label>
                      <input id="last" name="last" type="text" />
                  </div>
              </div>

              <div className="input-container full-width">
                  <label htmlFor="phone">Phone Number</label>
                  <input id="phone" name="phone" type="text" />
              </div>

              <div className="input-container full-width">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" />
              </div>

              <div className="input-container full-width">
                  <label htmlFor="address">Address</label>
                  <input id="address" name="address" type="text" />
              </div>

              <div className="city-state-zip-container">
                  <div className="input-container">
                      <label htmlFor="city">City</label>
                      <input id="city" name="city" type="text" />
                  </div>
                  <div className="input-container">
                      <label htmlFor="state">State</label>
                      <input id="state" name="state" type="text" />
                  </div>
                  <div className="input-container">
                      <label htmlFor="zip">Zip Code</label>
                      <input id="zip" name="zip" type="text" />
                  </div>
              </div>

              <button>Place Order</button>
          </form>
        </div>
      ) : (
        <h1> Your Cart Is Empty </h1>
      )}
    </div>
  );
};
