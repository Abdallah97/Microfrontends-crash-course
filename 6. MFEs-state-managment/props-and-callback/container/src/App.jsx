import React, { useState } from "react";
import FoodList from "./components/FoodList.jsx";
import Layout from "./components/Layout.jsx";
import "./style.css";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const callbackParent = (newItem) => {
    setCartItems((cartItems) => {
      const existingItem = cartItems.find(item => item.id === newItem.id);
    
      if (existingItem) {
        return cartItems.map(item => 
          item.id === newItem.id ?
            {...item, quantity: item.quantity + 1}
          : item
        )
      } else {
        return [...cartItems, {...newItem, quantity: 1}]
      }
    })
  }

  return (
    <Layout cart={cartItems}>
      <FoodList callback={callbackParent} />
    </Layout>
  )
}

export default App;
