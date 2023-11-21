import React from 'react'
import Sun from "../../img/sun.png";
import Moon from "../../img/moon.png";
import "./Toggle.css"
import { ThemeContext } from '../../Context';
import { useContext } from 'react';

const Toggle = () => {

    const theme=useContext(ThemeContext);
    const darkMode=theme.state.darkMode;

    const r=document.querySelector(':root');
    const rs=getComputedStyle(r);

    const handleClick=()=>
    {
        theme.dispatch({type: "Toggle"});
    }
  return (
    <div className='t'>
        <img src={Sun} alt=""/>
        <img src={Moon} alt=""/>
        <div className="t-button" onClick={handleClick} style={{left: darkMode? 20: 0, backgroundColor: darkMode && rs.getPropertyValue('--skyBlue')}}></div>
    </div>
  )
}

export default Toggle