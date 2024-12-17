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

            <ul className="nav">
                <li><NavLink to="/" className={({isActive}) =>
                    isActive ? "active" : "" }>Home</NavLink></li>
                
                <li><NavLink to="/vue-js" className={({isActive}) =>
                    isActive ? "active" : "" }>Vue App</NavLink></li>
                
                <li><NavLink to="/js-app" className={({isActive}) =>
                    isActive ? "active" : "" }>JS App</NavLink></li>
                
                <li><NavLink to="/to-do-app" className={({isActive}) =>
                    isActive ? "active" : "" }>To Do List</NavLink></li>
            </ul>
        </>
    )
}

export default Header;
