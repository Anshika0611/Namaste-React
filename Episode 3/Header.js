import React from "react";
import reactdom from "react-dom/client";
import logo from './logo.jpg';
import './App.css'
const Header = () => {
  return (
    <div className="header">
      <Logo/>
      <Search/>
      <Icon/>
    </div>
  )
}
const Logo=()=>{
    return(
       <div className="logo" >
        <img src={logo} alt='Logo'></img>
       </div>
    )
}
const Search=()=>{
    return(
        <div className="search">
            <input type="text" placeholder="Search..."/>
        </div>
    )
}
const Icon=()=> <img className="image" src={logo} alt='Logo'></img>

export default Header
