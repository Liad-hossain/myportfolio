import React from 'react'
import "./Card.css"
import { useContext } from 'react'
import { ThemeContext } from '../../Context'

const Card = (props) => {
  const theme=useContext(ThemeContext);
  const darkMode=theme.state.darkMode;
  const r=document.querySelector(':root');
  const rs=getComputedStyle(r);
  return (
    <div className='s-card' style={{backgroundColor: darkMode && rs.getPropertyValue('--white')}}>
      <img src={props.logo} alt="" className="s-card-logo" />
      <p className='s-card-title' style={{color: darkMode && rs.getPropertyValue('--lightBlack')}}>{props.title}</p>
    </div>
  )
}

export default Card