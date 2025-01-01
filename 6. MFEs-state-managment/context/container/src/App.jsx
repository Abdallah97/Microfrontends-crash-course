import React from "react";
import FoodList from "./components/FoodList.jsx";
import Layout from "./components/Layout.jsx";
import { ParentContextProvider } from "container/store"; 
import "./style.css";

const App = () => {
  return (
    <ParentContextProvider>
      <Layout>
        <FoodList />
      </Layout>
    </ParentContextProvider>
  )
}

export default App;
