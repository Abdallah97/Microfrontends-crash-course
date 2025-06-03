import React from "react";
import "JsAppHost/JsApp";

const JsApp = () => {
    return (
        <div className="js-app-wrapper">
            <div className="header_logo">
                <img id="logo" />
            </div>
            <div id="orderSummary"></div>
        </div>
    )
}

export default JsApp;
