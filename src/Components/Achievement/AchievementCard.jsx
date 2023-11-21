import React from 'react'
import "./AchievementCard.css"
import { useContext } from 'react'
import { ThemeContext } from '../../Context'

const AchievementCard = (props) => {
    const theme=useContext(ThemeContext);
    const darkMode=theme.state.darkMode;
    
    const r=document.querySelector(':root');
    const rs=getComputedStyle(r);

    return (
        <a href={props.link} target='_blank' style={{textDecoration: 'none'}}>
            <div className='a-card' style={{backgroundColor: darkMode && rs.getPropertyValue('--white')}}>
                {props.text}
            </div>
        </a>
    )
}

export default AchievementCard