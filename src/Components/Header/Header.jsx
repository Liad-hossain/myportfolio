import { useContext } from "react";
import { ThemeContext } from "../../Context";
import "./Header.css"
import Toggle from "../Toggle/Toggle"
import HeaderText from './HeaderText'
import { headerData } from './headerData'

const Header = () => {
  const theme=useContext(ThemeContext);
  const darkMode=theme.state.darkMode;
  var r=document.querySelector(':root');
  var rs=getComputedStyle(r);

  return (
    <div className='header' style={{backgroundColor: darkMode && rs.getPropertyValue('--lightBlack')}}>
        <div className="header-left">
            <Toggle className='left-toggle'/>
        </div>
        <div className="header-right">
            {
                headerData.map((item=>(
                    <HeaderText key={item.id} title={item.title} to={item.to} logo={item.logo}/>
                )))
            }
        </div>
    </div>
  )
}

export default Header