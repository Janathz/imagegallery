import React, { useState } from "react";
import data from "./Components/Backend/Data/Data";
import Header from "./Components/Frontend/Header/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Approutes from "./Components/Frontend/Routes/Approutes";
import Products from "./Components/Frontend/Products/Products";
import Cart from "./Components/Frontend/Cart/Cart";

const App = () => {
  const { productItems } = data;
  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };

const handleCartClearance = () => {
  setCartItems([]);
}


  return (
    <div>
      <Router>
        <Header cartItems={cartItems}/>
        <Approutes
          path="/"
          exact
          productItems={productItems}
          cartItems={cartItems}
          handleAddProduct={handleAddProduct}
          handleRemoveProduct={handleRemoveProduct}
          handleCartClearance={handleCartClearance}
        />
      </Router>
    </div>
  );
};

export default App;
