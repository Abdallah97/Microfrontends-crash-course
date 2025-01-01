import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";

const layout = (props) => {
    return (
        <>
            <Header cart={props.cart} />
            <Outlet />
            <Footer />
        </>
    )
}

export default layout;