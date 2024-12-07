import React from "react";
import "JsAppHost/JsApp";

const JsApp = () => {
    return (
        <div className="container">
            <div className="header_logo">
                <img id="logo" />
            </div>
            <div id="foodItems"></div>
        </div>
    )
}

export default JsApp;
