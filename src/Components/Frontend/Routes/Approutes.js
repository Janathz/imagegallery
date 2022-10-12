import React from "react";
import Products from "../Products/Products";
import { Switch, Route } from "react-router-dom";
import Cart from "../Cart/Cart";

const Approutes = ({
  productItems,
  cartItems,
  handleAddProduct,
  handleRemoveProduct,
  handleCartClearance,
}) => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Products
            productItems={productItems}
            handleAddProduct={handleAddProduct}
          />
        </Route>
        <Route path="/cart" exact>
          <Cart
            cartItems={cartItems}
            handleAddProduct={handleAddProduct}
            handleRemoveProduct={handleRemoveProduct}
            handleCartClearance={handleCartClearance}
          />
        </Route>
      </Switch>
    </div>
  );
};

export default Approutes;
