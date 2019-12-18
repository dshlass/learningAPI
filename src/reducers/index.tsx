import { combineReducers } from '@reduxjs/toolkit'
import foodItemReducer from './foodItemReducer'

const rootReducer = combineReducers({
  foodItem: foodItemReducer
})

export type RootState = ReturnType<typeof rootReducer>
export default rootReducer


