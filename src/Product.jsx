import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "./redux/slice";
import { fetchProducts } from "./redux/productSlice";

function Product() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);
  const productSelector = useSelector((state) => state.products.items);
  const cartSelector = useSelector((state)=> state.cart.items);
  return (
    <div className="product">
      {productSelector.map((item) => (
        <div key={item.id} className="product-card">
          <img
            src={item.thumbnail}
            alt="Product Image"
            className="product-image"
          />

          <div className="product-info">
            <p className="product-description">
              {item.title}
            </p>
            <h2 className="product-category">{item.category}</h2>

            <p className="product-price">{item.price}</p>
            {cartSelector.find(cartItem => cartItem.id === item.id)?
            <button
              className="remove-cart"
               onClick={() => dispatch(removeItem(item))}
            >
              Remove from cart
            </button>
            :
            <button
              onClick={() => dispatch(addItem(item))}
              className="add-to-cart"
            >
              Add to Cart
            </button>
            }
            
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
