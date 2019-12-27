import { ADD_FOOD_ITEM } from '../actions/types'
import {nutritionMap} from '../nutritionMap/nutritionMap'
// import { FoodCardProps } from '../actions/addFoodItem'
// export interface actionInterface {
//   type: String,
//   payload: any;
// }


/**
 * Typically we don't want to mutate state inside of
 * Redux. Since this is for search results, we will be
 * mutating the state per each request so we dont end up
 * with previous search results inside of our results.
 * */
// export default (state = [], action: actionInterface) => {
export default (state = [], action) => {
  switch (action.type) {
    case ADD_FOOD_ITEM: {
        const test = action.payload.full_nutrients
        const newNutrition = []
        for (let x of test) {
          for (let y of nutritionMap) {
            if (x.attr_id === y.attr_id) {
              newNutrition.push({
                value: x.value,
                name: y.name,
                unit: y.unit
              })
            }
          }
        }
        const newState = {...action.payload, full_nutrients: newNutrition}
      return [...state, newState]
      }

    default:
      return state
  }
}


//compare the two arrays
