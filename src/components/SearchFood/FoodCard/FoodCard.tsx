import React from "react";
import {FoodCardProps} from "./FoodCard.interface";


const FoodCard: React.FC<{item: FoodCardProps}> = (props) => {
  return (
    <button>
      <div className="top">
        <p>{props.item.food_name}</p>
      </div>
      <div className="bottom">
        <p>Nutrition</p>
      </div>
    </button>
  );
};

export default FoodCard;
