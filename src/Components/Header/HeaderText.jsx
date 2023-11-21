import React from 'react'
import { headerData } from './headerData'
import "./HeaderText.css"
import { useContext } from 'react'
import { ThemeContext } from '../../Context'
import { Link } from 'react-scroll/modules'
import { hover } from '@testing-library/user-event/dist/hover'

const HeaderText = (props) => {
  const theme=useContext(ThemeContext);
  const darkMode=theme.state.darkMode;

  const r=document.querySelector(':root');
  const rs=getComputedStyle(r);

  return (
    <div className='h-text' style={{color: darkMode && rs.getPropertyValue('--skyBlue'), borderColor: darkMode && rs.getPropertyValue('--skyBlue')}}>
      <Link spy={true} to={props.to} smooth={true} activeClass='activeClass'>
        {props.text}
      </Link>
    </div>
  )
}

export default HeaderText