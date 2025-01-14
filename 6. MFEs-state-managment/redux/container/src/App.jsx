import React from "react";
import { StoreProvider } from "container/store";
import FoodList from "./components/FoodList.jsx";
import Layout from "./components/Layout.jsx";
import "./style.css";

const App = () => {
  return (
    <StoreProvider>
      <Layout>
        <FoodList />
      </Layout>
    </StoreProvider>
  )
}

export default App;
