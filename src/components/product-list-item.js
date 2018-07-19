import React from 'react'
import AddItemBtn from './add-item-btn'
import RemoveItemBtn from './remove-item-btn'
import { connect } from 'react-redux'

class ProductListItem (props) {
  return (
    <div className='product-list-item'>
      <h3>{props.item.itemid}-{props.item.name}</h3>
      <div>${props.item.price.toFixed(2)}</div>
      <div>
        <AddItemBtn
          orderItem={props.orderItem}
          item={props.item}
          addToOrder={props.addToOrder}
        />
        {
          props.cartItem
            ? <RemoveItemBtn
              orderItem={props.orderItem}
              item={props.item}
              removeFromOrder={props.removeFromOrder}
            />
            : null
        }
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    order_detail: state.orders.order
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addToOrder: (item) => {
      dispatch({type: 'ADD_ITEM', payload: item})
    },
    removeFromOrder: (item) => {
      dispatch({type: 'REMOVE_ITEM', payload: item})
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListItem)