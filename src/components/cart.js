import React, {Component} from 'react'
import {connect} from 'react-redux'
import CheckoutPopup from './checkout'

/*
export const cartItemsWithQuantities = (cartItems) => {
  return cartItems.reduce((acc, item) => {
    const filteredItem = acc.filter(item2 => item2.id === item.id)[0]
    filteredItem !== undefined
      ? filteredItem.quantity++
      : acc.push({...item, quantity: 1})
    return acc
  }, [])
}*/

function sort(items) {
  return items.sort((a, b) => a.name < b.name)
}

class Cart extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {total_price: 0};
  //   // this.calculate_total_price = this.calculate_total_price.bind(this);
  // }
  // calculate_total_price = (subtotal) => this.setState = {total_price: this.state.total_price + subtotal};
  render() {
    let totalPrice = 0
    return (
      <div>
        <table>
          <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
          </tr>
          </thead>
          <tbody>
          {
            sort(this.props.cart).map((item, index) => {
              // this.calculate_total_price(item.price * item.quantity)
              totalPrice += (item.price * item.quantity)
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button onClick={() => {
                      this.props.addToCart(item)
                      // this.calculate_total_price(item.price)
                      totalPrice += item.price
                    }}>+
                    </button>
                    <button onClick={() => {
                      this.props.removeFromCart(item)
                      // this.calculate_total_price(-(item.price))
                      totalPrice -= item.price
                    }}>-
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        this.props.removeAllFromCart(item)
                        // this.calculate_total_price(-(item.price * item.quantity))
                        totalPrice -= (item.price * item.quantity)
                      }}
                    >
                      Remove all from cart
                    </button>
                  </td>
                </tr>)
            })
          }
          </tbody>
        </table>
        <div className='total'>
          <div>Total: ${totalPrice.toFixed(2)}</div>
          <div><CheckoutPopup cart={this.props.cart} total={totalPrice}/></div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (item) => {
      dispatch({type: 'ADD', payload: item})
    },
    removeFromCart: (item) => {
      dispatch({type: 'REMOVE', payload: item})
    },
    removeAllFromCart: (item) => {
      dispatch({type: 'REMOVE_ALL', payload: item})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)