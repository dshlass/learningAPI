import { combineReducers } from '@reduxjs/toolkit'
import foodItemReducer from './fetchFoodItemReducer'
import addedItemsReducer from './addFoodItemReducer'

const rootReducer = combineReducers({
  foodItem: foodItemReducer,
  addedItems: addedItemsReducer
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer


