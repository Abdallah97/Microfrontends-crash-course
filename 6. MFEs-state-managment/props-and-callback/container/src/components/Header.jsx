import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = (props) => {
    const [showCart, setShowCart] = useState(false);

    const clickHandler = () => {
        setShowCart(!showCart);
    }
    return (    
    <>
        <span className="cart" onClick={clickHandler}>🛒 ({props.cart.length})</span>

        {showCart &&  <ul className="cart-items">
            {props.cart.map(cartItem => {
                return <li key={cartItem.id}>{cartItem.name} ({cartItem.quantity})</li>
            })}
        </ul>}

        <div className="header">
            Microfrontend Host Application
        </div>
    </>
    )
}

export default Header;
