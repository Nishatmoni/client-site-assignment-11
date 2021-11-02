import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  // const totalReducer = (previous, product) => previous + product.price;
  // const total = cart.reduce(totalReducer, 0);
  let totalQuantity = 0;
  let total = 0;
  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    total = total + product.price * product.quantity;
    totalQuantity = totalQuantity + product.quantity;
  }

  return (
    <div>
      <h3>Order Summary</h3>
      <h5>Items Ordered: {totalQuantity}</h5>
      <br />
      <p>Grand Total: {total.toFixed(2)}</p>
      {props.children}
    </div>
  );
};

export default Cart;