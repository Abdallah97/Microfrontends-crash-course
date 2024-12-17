import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VeuJs from "./components/VueJs.jsx";
import JsApp from "./components/JsApp.jsx";
import FoodList from "./components/FoodList.jsx";
import ProductList from "./components/ProductList.jsx";
import Layout from "./components/Layout.jsx";
import NotFound from "./components/NotFound.jsx";

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

  const router = createBrowserRouter([
      {
        path: "/",
        element: <Layout cart={cartItems} />,
        errorElement: <NotFound />,
        children: [
          {
            path: "/",
            element: <FoodList callback={callbackParent} />
          },
          {
            path: "/vue-js",
            element: <VeuJs />
          },
          {
            path: "/js-app",
            element: <JsApp />
          },
          {
            path: "/to-do-app",
            element: <ProductList  cart={cartItems} />
          }
        ]
      }]
   );

  return (
    <RouterProvider router = {router}></RouterProvider>
  )
}

export default App;
