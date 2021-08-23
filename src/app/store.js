import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import cartReducer from '../features/cart/cartSlice';
import userReducer from '../features/users/userSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
    counter: counterReducer
  },
});

export const AppDispatch = store.dispatch;

export const RootState = store.getState;
/*
import { createStore } from 'redux';
import cartReducer from '../redux/cart/cartReducer'

const store = createStore(cartReducer)

export { store };
*/