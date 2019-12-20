import { ADD_FOOD_ITEM } from '../types'


export interface FoodCardProps {
  food_name: string;
  serving_unit: string;
  tag_name: string;
  serving_qty: number;
  common_type: null;
  tag_id: number;
  photo: {
    thumb: string;
  };
  serving_weight_grams: number;
  full_nutients: Object[];
  locale: string;
}


export const addFoodItem = (foodItem: FoodCardProps) => {
  return {
    type: ADD_FOOD_ITEM,
    payload: foodItem
  }
}
