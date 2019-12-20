import React from "react";
import {FoodCardProps} from "./FoodCard.interface";

//Redux
import { addFoodItem } from "../../../actions/addFoodItem";
import { clearFetchedItems } from "../../../actions/fetchFoodItem";
import { connect } from "react-redux";


const FoodCard: React.FC<{item: FoodCardProps}> = (props:any) => {

  const handleAddItem = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    //adds new item to the list
    props.addFoodItem(props.item)

    //clears the search after food item is added
    props.clearFetchedItems()
  }

  return (
    <button onClick={(event) => handleAddItem(event)}>
      <div className="top">
        <p>{props.item.food_name}</p>
      </div>
      <div className="bottom">
        <p>Nutrition</p>
      </div>
    </button>
  );
};

//Redux implementation
const mapStateToProps = (state: any) => {
  return { results: state.foodItem };
};

export default connect(mapStateToProps, { addFoodItem, clearFetchedItems })(FoodCard);
