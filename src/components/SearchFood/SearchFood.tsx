// import React, { useState, useEffect } from 'react';
import React, { useState } from 'react';
import FoodCard from './FoodCard/FoodCard';
import { FoodCardProps } from './FoodCard/FoodCard.interface';

//Redux implementation
import { fetchFoodItem } from "../../actions/fetchFoodItem";
import { connect } from "react-redux";



const SearchFood: React.FC = (props:any) => {
  const [food, setFood] = useState('');

  // console.log(props)
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setFood(value);
  };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      props.fetchFoodItem(food);
    };

  const displayResults = (results: FoodCardProps[]) => {
    return results.length > 0
      ? results.map((item: FoodCardProps, index: number) => (
          <div key={index}>
            <FoodCard item={item} />
          </div>
        ))
      : null;
  };

  return (
    <>
    <form onSubmit={(event) => handleSubmit(event)}>
      <input
        type="text"
        name="searchFood"
        id="searchFood"
        value={food}
        onChange={event => handleSearch(event)}
      />
      <button>Search</button>
    </form>
    {displayResults(props.results)}
    </>
  );
};

//Redux implementation
const mapStateToProps = (state: any) => {
  // console.log(state.foodItem)
  return { results: state.foodItem };
};

export default connect(mapStateToProps, { fetchFoodItem })(SearchFood);


