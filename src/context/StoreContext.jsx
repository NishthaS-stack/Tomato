import React, { createContext, useEffect, useState } from 'react';
import { food_list } from '../assets/assets';
// Ensure this path is correct

// Create the Context
export const StoreContext = createContext(null);

// Create the Provider Component
const StoreContextProvider = (props) => {
    const[cartItems,setCartItems]=useState({});
    const addToCart =(itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev,[itemId]:1}))
        }
        else{
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
    const removeFromCart =(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    

    console.log('StoreContextProvider rendered');
    const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
