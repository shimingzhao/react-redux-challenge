import React, { Component } from 'react'
import ProductListing from './product-listing'
import axios from 'axios'
import { connect } from 'react-redux'
import PlaceOrderBtn from './place-order-btn'

class HomePage extends Component {

  state = {
    data: []
  }

  componentDidMount () {
    axios.get('https://huddolapi-next.herokuapp.com/v1/challenge')
      .then((response) => {
        const food = response.data
        this.setState({data: food})
      })
      .catch((response) => console.log(response.error))
  }

  render () {
    return (
      <div>
        <h2>Home Page</h2>
        {this.state.data.map(res => {
            return (
              <div key={res.id}>
                <h3>{res.id}: {res.name}</h3>
                <ProductListing items={res.menu} store_name={res.name}/>
              </div>)
          }
        )}
        <div>
          <PlaceOrderBtn order={this.props.order} addOrder={this.props.addOrder}/>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    orders: state.orders
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addOrder: (order) => {
      dispatch({type: 'ADD_ORDER', payload: order})
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)

