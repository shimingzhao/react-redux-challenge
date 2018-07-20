import React from 'react'
import { connect } from 'react-redux'

import ProductListItem from './product-list-item'

function ProductListing (props) {

  return (
    <div className='product-listing'>
      {
        props.items.map((item, index) =>
          <ProductListItem
            item={item}
            storeName={props.store_name}
            key={index}
            addToOrder={props.addToOrder}
            removeFromOrder={props.removeFromOrder}
            orderItem={props.order.filter(orderItem => orderItem.itemid === item.itemid)[0]}
          />)
      }
    </div>
  )
}

function mapStateToProps (state) {
  return {
    order: state.order
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
    addOrder: (order) =>{
      dispatch({type: 'ADD_ORDER', payload: order})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing)