import axios from 'axios'

export const loadItems = () =>{
  axios.get('https://huddolapi-next.herokuapp.com/v1/challenge')
    .then((response) => dispatch({
      type: FETCH_RESTAURANTS_SUCCESS,
      payload: response.data
    })).catch((response) => dispatch({
    type: FETCH_RESTAURANTS_FAILURE,
    error: response.error
  }))
}
