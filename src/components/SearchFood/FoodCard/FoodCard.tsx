import React from "react";
import {FoodCardProps, AddFoodItem} from "../../../interface/FoodCard.interface";

//Redux
import { addFoodItem } from "../../../actions/addFoodItem";
import { clearFetchedItems } from "../../../actions/fetchFoodItem";
import { connect } from "react-redux";


const FoodCard: React.FC<{item: FoodCardProps | AddFoodItem}> = (props:any) => {

  const handleAddItem = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault()
    //adds new item to the list

    props.addFoodItem(props.item)

    //clears the search after food item is added
    props.clearFetchedItems()
  }

  const handleNutrition = () => {
    const nutrientId = [
      {attr_id:203, name:'Protein'},
      {attr_id:204, name:'Fats'},
      {attr_id:205, name:'Carbs'},
      {attr_id:208, name:'Calories'}
    ]
    const nutrientObj = []
    for (let x of props.item.full_nutrients) {
      for (let y of nutrientId) {
        if (x.attr_id === y.attr_id) {
          nutrientObj.push({
            name: y.name,
            value: x.value
          })
        }
      }
    }
   return nutrientObj.map((item,index) => {
      return (
        <div key={index} className="search__nutrient">
          <p>{item.name}</p>
          <p>{item.value}</p>
        </div>
      )
    })
  }

  return (
    <button className="search" onClick={(event) => handleAddItem(event)}>
      <div className="search__name">
        <p>{props.item.food_name}</p>
      </div>
      <div className="search__nutrients">
          {handleNutrition()}
      </div>
    </button>
  );
};

//Redux implementation
const mapStateToProps = (state: any) => {
  return { results: state.foodItem };
};

export default connect(mapStateToProps, { addFoodItem, clearFetchedItems })(FoodCard);
