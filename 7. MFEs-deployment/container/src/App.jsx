import React, { useState, useEffect, lazy, Suspense} from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import FoodList from "./components/FoodList.jsx";
import ToDoList from "./components/ToDoList.jsx";

import "./style.css";

const App = () => {
  return (
    <>
      <Header />
      <FoodList />
      <ToDoList />
      <Footer />
    </>
  )
}

export default App;
