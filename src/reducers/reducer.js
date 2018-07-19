import { addToOrder, removeFromOrder, removeAllFromOrder, addOrder, deleteOrder } from '../actions/action'

const initialState = {
  orders: {
    // order_id: '',
    // order_date: '',
    // order_total: 0,
    // order_detail: [
    //   {
    //     item_id: '',
    //     item_name: '',
    //     item_price: 0,
    //     item_quantity: 0,
    //     restaurant_name: ''
    //   }
    // ]
    data: []
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return addToOrder(state, action.payload)

    case 'REMOVE_ITEM':
      return removeFromOrder(state, action.payload)

    case 'REMOVE_ALL_ITEMS':
      return removeAllFromOrder(state, action.payload)

    case 'ADD_ORDER':
      return addOrder(state, action.payload)

    case 'DELETE_ORDER':
      return deleteOrder(state, action.payload)

    default:
      return state
  }
}

export default reducer