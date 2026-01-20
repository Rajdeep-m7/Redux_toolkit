import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearItem, removeItem } from "./redux/slice";
import { useNavigate } from "react-router-dom";

function CartList() {
  const navigate = useNavigate();
  const cartSelector = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const handleClick=()=>{
    console.log("order items" , cartSelector);
    localStorage.removeItem("cart");
    alert("Order complete !")
    dispatch(clearItem());
    navigate('/');
  }
  return (
    <div>
      <div className="cart-container">
        <h2 className="cart-heading">Shopping Cart</h2>
        {cartSelector.length ? (
          cartSelector.map((item) => (
            <div key={item.id} className="cart-row">
              <div className="cart-product">
                <img src={item.thumbnail} className="product-thumb" />

                <div className="product-info">
                  <h3 className="product-title">{item.title}</h3>
                  <p className="product-category">{item.category}</p>
                </div>
              </div>

              <div className="cart-actions">
                <span className="product-price">{item.price}</span>
                <button
                  onClick={() => dispatch(removeItem(item))}
                  className="remove-item-btn"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>Your Cart is Empty</p>
        )}
        {cartSelector.length ?
        <div className="order-item">
          <button onClick={handleClick} className="order-btn">Place Order</button>
          <div className="total-price">
            Total Price :
            {cartSelector.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
          </div>
        </div> : null
        }
      </div>
    </div>
  );
}

export default CartList;
