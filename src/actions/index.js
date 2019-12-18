import getNutrition from '../apis/fetchURL';
import { FETCH_FOOD_ITEM } from './types'

export const fetchFoodItem = (foodItem) => {
  return async (dispatch) => {
    const response = await getNutrition.get(`?query=${foodItem}&branded=false&detailed=true`)
    dispatch({ type: FETCH_FOOD_ITEM, payload: response.data.common })
  };
}
