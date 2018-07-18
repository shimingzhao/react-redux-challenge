// import axios from 'axios'
// import { FETCH_RESTAURANTS_FAILURE, FETCH_RESTAURANTS_SUCCESS } from './loadItemAction'

const cartWithoutItem = (cart, item) => cart.filter(cartItem => cartItem.id !== item.id)

const itemInCart = (cart, item) => cart.filter(cartItem => cartItem.id === item.id)[0]

// export const loadItems = () =>{
//   axios.get('https://huddolapi-next.herokuapp.com/v1/challenge')
//     .then((response) => dispatch({
//       type: FETCH_RESTAURANTS_SUCCESS,
//       payload: response.data
//     })).catch((response) => dispatch({
//     type: FETCH_RESTAURANTS_FAILURE,
//     error: response.error
//   }))
// }
//
// export const loadItems = () =>{
//   axios.get('https://huddolapi-next.herokuapp.com/v1/challenge')
//     .then((response) => console.log(response.data))
//     .catch((response) => console.log(response.error))
// }

export const addToCart = (cart, item) => {
  const cartItem = itemInCart(cart, item)
  return cartItem === undefined
    ? [...cartWithoutItem(cart, item), {...item, quantity: 1}]
    : [...cartWithoutItem(cart, item), {...cartItem, quantity: cartItem.quantity + 1}]
}

export const removeFromCart = (cart, item) => {
  return item.quantity === 1
    ? [...cartWithoutItem(cart, item)]
    : [...cartWithoutItem(cart, item), {...item, quantity: item.quantity - 1}]
}

export const removeAllFromCart = (cart, item) => {
  return [...cartWithoutItem(cart, item)]
}