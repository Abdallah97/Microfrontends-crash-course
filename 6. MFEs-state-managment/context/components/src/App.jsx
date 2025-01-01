import React from "react";
import CardDetails from "./components/CardDetails.jsx";
import { ParentContextProvider } from "container/store";

const App = () => {
    const cardDetails = {
        "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
        "name": "Classic Margherita Pizza",
        "cuisine": "Italian",
        "rating": 4.5
    };

    return (
        <ParentContextProvider>
            <CardDetails data={cardDetails} />
        </ParentContextProvider>
    )
}

export default App;
