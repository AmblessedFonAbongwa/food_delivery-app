/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContext =createContext(null)

const StoreContextProvider =(props)=>{
const [cartItems,setCardItems]=useState({});

 const addToCard =(itemId)=>{
     if(!cartItems[itemId]){
          setCardItems((prev)=>({...prev,[itemId]:1}))
     } else{
          setCardItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
     }
 }

 const clearFromCard=(itemId)=>{
     setCardItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
 };
 useEffect(()=>{
  console.log(cartItems);
  
 },[cartItems])
     const ContextValue={
       food_list, setCardItems,
       cartItems, 
      
       addToCard,clearFromCard

     }
     return(
        <StoreContext.Provider value={ContextValue}>
   {props.children}
            </StoreContext.Provider>
     )
}
export default StoreContextProvider