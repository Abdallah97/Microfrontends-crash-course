import React, { useEffect, useState } from "react";
import cartData from "container/store";

const Header = () => {
    const [showCart, setShowCart] = useState(false);
    const [cart, setCart] = useState([]);

    const updateCart = (newItem) => {
        setCart((cart) => {
            const existingItem = cart.find(item => item.id === newItem.id);
          
            if (existingItem) {
              return cart.map(item => 
                item.id === newItem.id ?
                  {...item, quantity: item.quantity + 1}
                : item
              )
            } else {
              return [...cart, {...newItem, quantity: 1}]
            }
        })
    }

    useEffect(() => {
        cartData.subscribe({
            next: (newItem) => updateCart(newItem)
        }) 
    }, [])

    const clickHandler = () => {
        setShowCart(!showCart);
    }

    return (    
    <>
        <span className="cart" onClick={clickHandler}>🛒 ({cart.length})</span>

        {showCart &&  <ul className="cart-items">
            {cart.map(cartItem => {
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
