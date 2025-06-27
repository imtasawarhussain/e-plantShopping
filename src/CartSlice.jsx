import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const {name, image, cost} = action.payload;
      const existingItem = state.items.find(item=> item.name === name);
      // console.log("Adding item to cart:", name, image, cost); // Log the item being added
      if(existingItem){
        existingItem.quantitiy++; // Increment quantity if item already exists
      }else{
        state.items.push({
          name,
          image,
          cost,
          quantity: 1, // Set initial quantity to 1
        });
      }
    },
    removeItem: (state, action) => {
      // console.log("Removing item from cart:", action.payload); // Log the item being removed
      state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
      const {name, quantity} = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if(itemToUpdate){
        itemToUpdate.quantity = quantity; // Update the quantity of the item
      }
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
