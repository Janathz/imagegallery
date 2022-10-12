import React from "react";
import "./Cart.css";

const Cart = ({
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearance,
}) => {
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * 5.99,
    0
  );

  return (
    <div className="cart-items">
      <h2 className="cart-items-header">Cart Items</h2>
      <div className="clear-cart">
        {cartItems.length >= 1 && (
          <button className="clear-cart-button" onClick={handleCartClearance}>
            Clear Cart
          </button>
        )}
      </div>

      {cartItems.length === 0 && (
        <div className="cart-items-empty">No items added.</div>
      )}

      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-items-list">
            <img className="cart-items-image" src={item.url} alt={item.id} />
            <div className="cart-item-id">Item id: {item.id}</div>
            <div className="cart-items-function">
              <button
                className="cart-items-add"
                onClick={() => handleAddProduct(item)}
              >
                +
              </button>
              <button
                className="cart-items-remove"
                onClick={() => handleRemoveProduct(item)}
              >
                -
              </button>
            </div>
            <div className="cart-items-price">
              {item.quantity}*${5.99}
            </div>
          </div>
        ))}
      </div>
      <div className="cart-items-total-price-name">
        Total{" "}
        <div className="cart-items-total-price">${totalPrice.toFixed(2)}</div>
        <div className="cart-items-order">
          {cartItems.length >= 1 && (
            <button className="cart-items-order-button"> Place Order </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
