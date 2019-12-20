import getNutrition from '../../apis/fetchURL';
import { FETCH_FOOD_ITEM, CLEAR_FETCHED_ITEMS } from '../types'

export const fetchFoodItem = (foodItem: string) => {
  return async (dispatch: any) => {
    const response = await getNutrition.get(`?query=${foodItem}&branded=false&detailed=true`)
    dispatch({ type: FETCH_FOOD_ITEM, payload: response.data.common })
  };
}

export const clearFetchedItems = () => {
  return {
    type: CLEAR_FETCHED_ITEMS,
    payload: []
  }
};
