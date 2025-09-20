import React, { useState } from "react";
import "../Css/CartPage.css";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, title: "iPhone 15", price: 1200, image: "https://via.placeholder.com/120", quantity: 1 },
    { id: 2, title: "Samsung Galaxy S24", price: 1100, image: "https://via.placeholder.com/120", quantity: 2 },
  ]);

  const addToCart = (product) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === product.id && item.quantity < 20
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p className="cart-empty">Your cart is empty!</p>
      ) : (
        <>
          <div className="cart-list">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} />
                <div className="cart-details">
                  <h4>{item.title}</h4>
                  <p className="price">${item.price}</p>
                  <div className="cart-controls">
                    <button onClick={() => decreaseQty(item.id)} className="qty-btn">-</button>
                    <span className="qty">{item.quantity}</span>
                    <button
                      onClick={() => addToCart(item)}
                      className="qty-btn"
                      disabled={item.quantity >= 20}
                      style={{ opacity: item.quantity >= 20 ? 0.5 : 1, cursor: item.quantity >= 20 ? "not-allowed" : "pointer" }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="remove-btn">Remove</button>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <h3>Total: ${totalPrice}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
