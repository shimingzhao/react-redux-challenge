import React from 'react'
import { connect } from 'react-redux'

import ProductListItem from './product-list-item'

function ProductListing (props) {
  return (
    <div className='product-listing'>
      {
        props.products.map((product, index) =>
          <ProductListItem
            product={product}
            key={index}
            addToCart={props.addToCart}
            removeFromCart={props.removeFromCart}
            cartItem={props.cart.filter(cartItem => cartItem.name === product.name)[0]}
          />)
      }
    </div>
  )
}

function mapStateToProps (state) {
  return {
    cart: state.cart
  }
}

function mapDispatchToProps (dispatch) {
  console.log(dispatch)
  return {
    addToCart: (item) => {
      dispatch({type: 'ADD', payload: item})
    },
    removeFromCart: (item) => {
      dispatch({type: 'REMOVE', payload: item})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing)