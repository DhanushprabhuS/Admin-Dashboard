import React, { createContext, useContext, useEffect, useState } from 'react';

const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

const cartInitialState = {
  iceCream: 250,
  tomato: 450,
  candy: 190
};

const cartInitialQty = {
  iceCream: 1,
  tomato: 1,
  candy: 1
};

export const ContextProvider = ({ children }) => {
  
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);

  const [currentColor,setCurrentColor] = useState("#03c9d7");
  const [currentMode, setCurrentMode] = useState("Light");
  const [themeSettings, setThemeSettings] = useState(false);
  
  const setMode = (e) =>{
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode',e.target.value)
    setThemeSettings(false);
  }

  const setColor = (color) =>{
    setCurrentColor(color);
    localStorage.setItem('ColorMode',color);
  }

  const handleClick = (clicked,state=true) =>{
    setIsClicked({...initialState,[clicked]:state});
  }

  const [cartItems,setCartItems] = useState(cartInitialState);
  const [cartQty,setCartQty] = useState(cartInitialQty);
  const [total,setTotal] = useState(890);
  const [deTotal,setDeTotal] = useState(890);
  const [coupon,setCoupon] = useState("");

  const handleCoupon = (e) =>{
    setCoupon(e.target.value);
  }

  const handleClickCart = (clicked,stat) =>{
    if(stat){
      setCartItems({...cartItems,[clicked]:cartItems[clicked]+cartInitialState[clicked]});
      setCartQty({...cartQty, [clicked]:cartQty[clicked]+cartInitialQty[clicked]});
      setIsApplied(false);
    }else{
      if(cartItems[clicked]-cartInitialState[clicked] >=0)
      {
        setCartItems({...cartItems,[clicked]:cartItems[clicked]-cartInitialState[clicked]});
        setCartQty({...cartQty, [clicked]:cartQty[clicked]-cartInitialQty[clicked]});
        setIsApplied(false);
      }
    }
  }

  useEffect(()=>{
    setTotal(cartItems.candy + cartItems.iceCream + cartItems.tomato);
    setDeTotal(cartItems.candy + cartItems.iceCream + cartItems.tomato);
  },[cartItems]);

  const [isApplied,setIsApplied] = useState(false);
  useEffect(()=>{
    if(coupon === "REACTJS" && total>1500){
      if(!isApplied){
      setDeTotal(total-1000);
      setIsApplied(true);
      }
    }
    else{
      setIsApplied(false);
      setDeTotal(total);
    }
    
  },[coupon,total]);

  useEffect(()=>{
      if(!isApplied)setDeTotal(total);
  },[isApplied]);
  

  return (
    <StateContext.Provider value={{  activeMenu, setActiveMenu, isClicked, setIsClicked, 
    handleClick, screenSize, setScreenSize, currentColor, currentMode,setColor, setMode,
    themeSettings, setThemeSettings, cartItems, handleClickCart, total, cartQty, handleCoupon, 
    deTotal, isApplied}}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);