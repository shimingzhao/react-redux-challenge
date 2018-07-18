import React, { Component } from 'react'
import ProductListing from './product-listing'
import axios from 'axios'

export default class HomePage extends Component {
  state = {
    data: []
  }
  componentDidMount(){
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
              <ProductListing products={res.menu} />
            </div>)}
        )}
      </div>
    )
  }
}

