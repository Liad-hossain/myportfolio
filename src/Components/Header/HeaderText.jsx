import "./HeaderText.css"
import { useContext } from 'react'
import { ThemeContext } from '../../Context'
import { Link } from 'react-scroll/modules'


const HeaderText = (props) => {
  const theme=useContext(ThemeContext);
  const darkMode=theme.state.darkMode;

  const r=document.querySelector(':root');
  const rs=getComputedStyle(r);

  return (
    <div className='h-comp-wrapper'>
      <Link spy={true} to={props.to} smooth={true} activeClass='activeClass'>
        <div className='h-comp' style={{outlineColor: darkMode && rs.getPropertyValue('--skyBlue')}}>
          <img src={props.logo} alt="" className="h-comp-logo" />
          <p className='h-comp-text' style={{color: darkMode && rs.getPropertyValue('--skyBlue')}}>{props.title}</p>
        </div>
      </Link>
    </div>
  )
}

export default HeaderText