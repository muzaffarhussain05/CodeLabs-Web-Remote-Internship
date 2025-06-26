import React from 'react';

const Cart = ({ cartItems, removeFromCart, increaseQty, decreaseQty }) => {
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2>🧾 Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <div>
                <strong>{item.name}</strong> - ${item.price} × {item.quantity}
              </div>
              <div>
                <button onClick={() => decreaseQty(item.id)}>-</button>
                <button onClick={() => increaseQty(item.id)}>+</button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <h3>Total: ${totalAmount.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
};

export default Cart;
