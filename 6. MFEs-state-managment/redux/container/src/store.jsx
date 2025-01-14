import React from "react";
import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useSelector, useDispatch } from "react-redux";

const initialState = {
  cart: []
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, newItem) => {
      const { payload } = newItem;
      const existingItem = state.cart.find(item => item.id === payload.id);
      
      if (existingItem) {
          state.cart = state.cart.map(item => 
          item.id === payload.id ?
            {...item, quantity: item.quantity + 1}
          : item
        )
      } else {
          state.cart = [...state.cart, {...payload, quantity: 1}]
      }
    }
  }
})

const { setCart } = cartSlice.actions;

const store = configureStore({
  reducer: {
    cartReducer: cartSlice.reducer
  }
})

export function StoreProvider({children}) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export function useStore() {
  const cart = useSelector((state) => state.cartReducer.cart)
  const dispatch = useDispatch();

  return {
    cart,
    setCart: (newItem) => dispatch(setCart(newItem))
  }
}
