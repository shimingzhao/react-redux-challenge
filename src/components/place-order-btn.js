import React from 'react'

export default function PlaceOrderButton (props) {
  return (
    <button onClick={() => props.addOrder(props.order)}>
      Place Order
    </button>
  )
}