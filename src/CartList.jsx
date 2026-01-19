import React from "react";
import { useSelector } from "react-redux";

function CartList() {
  const cartSelector = useSelector((state) => state.cart.items);
  console.log(cartSelector);
  return (
    <div>
      <div className="cart-container">
        <h2 className="cart-heading">Shopping Cart</h2>
        {cartSelector.length ? (
          cartSelector.map((item) => (
            <div className="cart-row">
              <div className="cart-product">
                <img src={item.thumbnail} className="product-thumb" />

                <div className="product-info">
                  <h3 className="product-title">{item.title}</h3>
                  <p className="product-category">{item.category}</p>
                </div>
              </div>

              <div className="cart-actions">
                <span className="product-price">{item.price}</span>
                <button className="remove-item-btn">Remove</button>
              </div>
            </div>
          ))
        ) : (
          <p>Your Cart is Empty</p>
        )}
        <div className="total-price">
          Total Price :{cartSelector.reduce((sum, item) => sum + item.price, 0)}
        </div>
      </div>
    </div>
  );
}

export default CartList;
