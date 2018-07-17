import {addToCart, removeFromCart, removeAllFromCart} from '../actions/cartAction'

const cartReducer = (state = [], action) => {
  switch (action.type){
    case 'ADD':
      return addToCart(state, action.payload)

    case 'REMOVE':
      return removeFromCart(state, action.payload)

    case 'REMOVE_ALL':
      return removeAllFromCart(state, action.payload)

    default:
      return state
  }
}

export default cartReducer