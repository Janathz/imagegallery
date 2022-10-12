import React from "react";
import "./Products.css";

const Products = ({ productItems, handleAddProduct }) => {

  return (
    <div className="products">
      {productItems.map((productItem) => (
        <div className="card">
          <div>
            <img
              className="product-image"
              src={productItem.url}
              alt={productItem.id}
            />
          </div>
          {/* <div>
            <h3 className="product-name">{productItem.id}</h3>
          </div> */}
          {/* <div>
            <h3 className="product-price">${5.99}</h3>
          </div> */}
          <div>
            <button
              className="product-add-button"
              onClick={()=> handleAddProduct(productItem)}
            >
              Add to Cart <i class="fa fa-shopping-cart"></i>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
