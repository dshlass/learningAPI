import React, {useState} from 'react'
// import {nutritionMap} from '../../../nutritionMap/nutritionMap'




const FoodBar = (props:any) => {

  const [hover, isHover] = useState(false)

  const handleHover = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    (!hover) ? isHover(true) : isHover(false)
  }

  const handleAdditionalDisplay = () => {
    return (hover) ? props.item.full_nutrients.map((item:any, index:number) => {
      return (
      <li key={index}>
          <p>id: {item.attr_id}, value: {item.value}</p>
      </li>
      )
    }) :
    null

  }

  // console.log(props.item.full_nutrients)
  return (
    <>
      <li onMouseEnter={(event) => handleHover(event)} onMouseLeave={(event) => handleHover(event)}>
      {props.item.food_name}
    </li>
    {handleAdditionalDisplay()}
    </>
  )
}

export default FoodBar
