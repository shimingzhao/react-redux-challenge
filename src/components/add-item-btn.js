import React from 'react'

export default function AddItemButton (props) {
  return (
    <button onClick={() => props.addToOrder(props.order.item)}>
      Add to order ({(props.order.item && props.order.item.quantity) || 0 })
    </button>
  )
}