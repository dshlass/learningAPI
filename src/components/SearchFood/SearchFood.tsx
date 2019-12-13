import React, { useState, useEffect } from 'react';
import FoodCard from './FoodCard/FoodCard';
import { FoodCardProps } from './FoodCard/FoodCard.interface';

const SearchFood: React.FC = () => {
  const [state, setState] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setState(value);
  };

  useEffect(() => {
    getFood(state);
  }, [state]);

  const getFood = async (state: string) => {
    const endpoint = `https://trackapi.nutritionix.com/v2/search/instant?query=${state}&branded=false&detailed=true`;
    const settings = {
      method: "GET",
      headers: {
        "x-app-id": "03f178a1",
        "x-app-key": "7b9393e1f1aa285fe2a0ac904110c620"
      }
    };
    const response = await fetch(endpoint, settings);
    const data = await response.json();
    // console.log(data.common);
    setResults(data.common || []);
  };

  const displayResults = (results: FoodCardProps[]) => {
    console.log(results)
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
    <input
      type="text"
      name="searchFood"
      id="searchFood"
      value={state}
      onChange={event => handleSearch(event)}
    />
    {displayResults(results)}
    </>
  );
};

export default SearchFood
