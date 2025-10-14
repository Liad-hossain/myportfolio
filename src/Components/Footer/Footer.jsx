import "./Footer.css"
import { useContext } from "react";
import { ThemeContext } from "../../Context";

const Footer = () => {
  const theme=useContext(ThemeContext);
  const darkMode=theme.state.darkMode;
  var r=document.querySelector(':root');
  var rs=getComputedStyle(r);

  return (
    <div className='footer' style={{backgroundColor: darkMode && rs.getPropertyValue('--lightBlack')}}>
        <span style={{color: darkMode && 'whitesmoke'}}>Thank you so much for visiting my portfolio.</span>
    </div>
  )
}

export default Footer;