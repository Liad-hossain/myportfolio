import React from 'react'
import "./Achievement.css"
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { ThemeContext } from '../../Context'
import { achievementData } from './achievementData'
import AchievementCard from './AchievementCard'

const Achievement = () => {
    const theme=useContext(ThemeContext);
    const darkMode=theme.state.darkMode;

    const r=document.querySelector(':root');
    const rs=getComputedStyle(r);

    const transition={duration: 2,type: 'spring'};

    return (
        <div className='a' id='Achievement'>
            <motion.div 
            initial={{left: '-5%'}}
            whileInView={{left: '42.5%'}}
            transition={transition}
            style={{backgroundColor: darkMode && rs.getPropertyValue('--white'), color: darkMode && rs.getPropertyValue('--lightBlack')}}
            className="a-title">Achievements</motion.div>
            <div className="a-section">
            {
                achievementData.map((item=>(
                    <AchievementCard key={item.id} text={item.text} link={item.link} />
                )))
            }
            </div>
        </div>
    )
}

export default Achievement