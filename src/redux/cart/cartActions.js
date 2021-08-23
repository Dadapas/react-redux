import { ADD_CART, DELETE_CART } from './cartTypes';


export const addCart = (cart) => {

    return {
      type: ADD_CART,
      payload: cart
    }
}

export const deleteCart = (index) => {

    return {
      type: DELETE_CART,
      payload: index
    }
}
