import React  from 'react';
import { FoodCardProps } from '../SearchFood/FoodCard/FoodCard.interface';


//Redux implementation
import { addFoodItem } from "../../actions/addFoodItem";
import { connect } from "react-redux";


const SelectedFoods: React.FC = (props: any) => {
  const addDisplay = (foodItems: FoodCardProps[]) => {
    return (foodItems.length > 0) ?
      foodItems.map((item: FoodCardProps, index: number) => (
      <li key={index}>
        {item.food_name}
      </li>
    )) : null
  }

  return (
    <>
      {addDisplay(props.addedItems)}
    </>
  );
};

//Redux implementation
const mapStateToProps = (state: any) => {
  return { addedItems: state.addedItems };
};

export default connect(mapStateToProps, { addFoodItem })(SelectedFoods);


