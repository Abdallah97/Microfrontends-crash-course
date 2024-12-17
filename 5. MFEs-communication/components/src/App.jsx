import React from "react";
import CardDetails from "./components/CardDetails.jsx";
import CardShort from "./components/CardShort.jsx";

const App = () => {
    const cardDetails = {
        "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
        "name": "Classic Margherita Pizza",
        "cuisine": "Italian",
        "rating": 4.5
    };

    const cardShortDetails = {
        "image": "https://cdn.dummyjson.com/recipe-images/1.webp",
        "name": "Classic Margherita Pizza"
    };

    const parentCallback = (result) => {
        console.log(result);
    }

    return (
        <>
            <div>
                <CardDetails data={cardDetails} callback={parentCallback} />
            </div>
            <CardShort data={cardShortDetails} />
        </>
    )
}

export default App;
