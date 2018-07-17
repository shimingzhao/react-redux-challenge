import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import cartReducer from '../reducers/cartReducer'
import loadItemReducer from '../reducers/loadItemReducer'

const rootReducer = combineReducers({
  cart: cartReducer,
  load: loadItemReducer
})

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store