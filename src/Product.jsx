import React from "react";

function Product() {
  return (
    <div>
      <div className="product-card">
        <img
          src="https://imgs.search.brave.com/Nb9MR-573OdnAOnlETvLeolpblYnapoSoKDpurEeHRs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMubXludGFzc2V0/cy5jb20vZHByXzIs/cV82MCx3XzIxMCxj/X2xpbWl0LGZsX3By/b2dyZXNzaXZlL2Fz/c2V0cy9pbWFnZXMv/MjAyNS9TRVBURU1C/RVIvMjQvTXI2akZx/cjJfYWM0Y2E0ZjEx/Mzg2NGFhMmIxMDhk/ZDk4ZjgzMDg3N2Qu/anBn"
          alt="Product Image"
          className="product-image"
        />

        <div className="product-info">
          <p className="product-description">
            Comfortable everyday sneakers made with premium materials.
          </p>

          <p className="product-price">$79.99</p>

          <button className="add-to-cart">Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Product;
