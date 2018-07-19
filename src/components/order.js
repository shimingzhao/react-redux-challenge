import React, {Component} from 'react'
import {connect} from 'react-redux'
import CheckoutPopup from './checkout'

// function sort(items) {
//   return items.sort((a, b) => a.itemid < b.itemid)
// }

class Order extends Component {
  render() {
    let totalPrice = 0
    return (
      <div>
        {/*<table>*/}
          {/*<thead>*/}
          {/*<tr>*/}
            {/*<th>Item</th>*/}
            {/*<th>Quantity</th>*/}
            {/*<th>Price</th>*/}
            {/*<th>Total</th>*/}
          {/*</tr>*/}
          {/*</thead>*/}
          {/*<tbody>*/}
          {/*{*/}
            {/*this.props.order.map((item, index) => {*/}
              {/*// this.calculate_total_price(item.price * item.quantity)*/}
              {/*totalPrice += (item.price * item.quantity)*/}
              {/*return (*/}
                {/*<tr key={index}>*/}
                  {/*<td>{item.name}</td>*/}
                  {/*<td>{item.quantity}</td>*/}
                  {/*<td>${item.price.toFixed(2)}</td>*/}
                  {/*<td>${(item.price * item.quantity).toFixed(2)}</td>*/}
                  {/*<td>*/}
                    {/*<button onClick={() => {*/}
                      {/*this.props.addToCart(item)*/}
                      {/*// this.calculate_total_price(item.price)*/}
                      {/*totalPrice += item.price*/}
                    {/*}}>+*/}
                    {/*</button>*/}
                    {/*<button onClick={() => {*/}
                      {/*this.props.removeFromCart(item)*/}
                      {/*// this.calculate_total_price(-(item.price))*/}
                      {/*totalPrice -= item.price*/}
                    {/*}}>-*/}
                    {/*</button>*/}
                  {/*</td>*/}
                  {/*<td>*/}
                    {/*<button*/}
                      {/*onClick={() => {*/}
                        {/*this.props.removeAllFromCart(item)*/}
                        {/*// this.calculate_total_price(-(item.price * item.quantity))*/}
                        {/*totalPrice -= (item.price * item.quantity)*/}
                      {/*}}*/}
                    {/*>*/}
                      {/*Remove all from cart*/}
                    {/*</button>*/}
                  {/*</td>*/}
                {/*</tr>)*/}
            {/*})*/}
          {/*}*/}
          {/*</tbody>*/}
        {/*</table>*/}
        {/*<div className='total'>*/}
          {/*<div>Total: ${totalPrice.toFixed(2)}</div>*/}
          {/*<div><CheckoutPopup cart={this.props.cart} total={totalPrice}/></div>*/}
        {/*</div>*/}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    orders: state.orders,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addToOrder: (item) => {
      dispatch({type: 'ADD_ITEM', payload: item})
    },
    removeFromCart: (item) => {
      dispatch({type: 'REMOVE_ITEM', payload: item})
    },
    removeAllFromCart: (item) => {
      dispatch({type: 'REMOVE_ALL_ITEMS', payload: item})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Order)