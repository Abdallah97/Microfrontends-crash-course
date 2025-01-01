import { create } from 'zustand'

const useCartStore = create((set) => ({
  cart: [],
  setCart: (newItem) => set((state) => {
    const existingItem = state.cart.find(item => item.id === newItem.id);
    if (existingItem) {
      return {
        cart: state.cart.map(item => 
        item.id === newItem.id ?
          {...item, quantity: item.quantity + 1}
        : item
      )}
    } else {
      return {
        cart: [...state.cart, {...newItem, quantity: 1}]
      } 
    }
  })
}))

export default useCartStore;
