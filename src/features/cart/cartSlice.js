import { /*createAsyncThunk,*/ createSlice } from '@reduxjs/toolkit';

export const CART_LOCALSTORAGE = 'CART_LOCALSTORAGE'

export function getCarts()
{
  let stringCarts = localStorage.getItem(CART_LOCALSTORAGE)

  let carts = JSON.parse(stringCarts);
  carts = carts.filter(n => n != null )
  return carts
}
let carts = getCarts()
const initialState = {
  carts
};

export function updateCartLocal(carts)
{
  localStorage.setItem(CART_LOCALSTORAGE, JSON.stringify(carts))
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    addCart: (state, action) => {
      
      state.carts.push(action.payload)
      updateCartLocal(state.carts)
    },
    updateCart: (state, action) => {
      
      state.carts[action.payload.id] = action.payload.cart;
      updateCartLocal(state.carts);
    },
    increment: (state, action) => {
      
      let cart = state.carts[action.payload];
      cart.nbr++;
      updateCartLocal(state.carts);
    },
    decrement: (state, action) => {
      
      let cart = state.carts[action.payload];
      cart.nbr--;
      updateCartLocal(state.carts);
    },
    deleteCart: (state, action) => {

      delete state.carts[action.payload];
      updateCartLocal(state.carts);
    },
  },

});

export function incrementProduct() {

}

export const { addCart, deleteCart, updateCart, increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
