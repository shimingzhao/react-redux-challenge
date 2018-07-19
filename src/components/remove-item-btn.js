import React from 'react'

export default function RemoveItemButton (props) {
  return <button
    onClick={() => props.removeFromCart(props.cartItem)}
  >Remove</button>
}