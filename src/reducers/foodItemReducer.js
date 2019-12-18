import {FETCH_FOOD_ITEM} from '../actions/types'

/**
 * Typically we don't want to mutate state inside of
 * Redux. Since this is for search results, we will be
 * mutating the state per each request so we dont end up
 * with previous search results inside of our results.
 * */
export default (state = [], action) => {
  switch(action.type) {
    case FETCH_FOOD_ITEM : {
      // return [...state, action.payload]
      return [...action.payload]
    }
    default:
      return state
  }
}
