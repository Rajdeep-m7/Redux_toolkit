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

            <button
              onClick={() => dispatch(addItem(1))}
              className="add-to-cart"
            >
              Add to Cart
            </button>
            <button
              onClick={() => dispatch(removeItem(1))}
              className="remove-cart"
            >
              Remove Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Product;
