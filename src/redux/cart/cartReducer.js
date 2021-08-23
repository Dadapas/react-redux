import { ADD_CART, DELETE_CART }  from './cartTypes';

const initialState = {
    carts: [
      {
        name: 'Item 1',
        price: 1654.654,
        nbr: 1,
      },
      {
        name: 'Item 2',
        price: 4654,
        nbr: 2,
      },
    ]
}

const cartReducer = (state = initialState, action) => {

    switch (action.type) {
      case ADD_CART:
        return {
          ...state,
          carts: state.carts.push(action.payload)
        }
      case DELETE_CART:
        let carts = state.carts
        delete carts[action.payload];

        return {
          ...state,
          carts
        }
      default: return state

    }
}

export default cartReducer
