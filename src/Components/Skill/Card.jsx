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
    <div className='c' style={{backgroundColor: darkMode && rs.getPropertyValue('--white')}}>
        {props.text}
    </div>
  )
}

export default Card