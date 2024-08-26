import React, { useContext,useState } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {
  const context = useContext(StoreContext);

  // Handle case where context might be null
  if (!context) {
    return <div>No context available</div>;
  }

  const { food_list } = context;
    
     // const { food_list } = useContext(StoreContext);
  return (
    <div className='food-display' id='food-display'> 
    <h2>Top searches that match </h2>
    
     <div className="food-display-list">
        {food_list.map((item, index) => {
          if(category==="All"||category===item.category){
            return <FoodItem key={index } id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>

          }
          else{
            return null;
          }
            
        })}
     </div>
    </div>
  )
}

export default FoodDisplay;
