import React from 'react'
import { motion } from 'framer-motion'
import "./Skill.css"
import { useContext } from 'react';
import { ThemeContext } from '../../Context';
import { skillData } from './SkillData';
import Card from './Card';

const Skill = () => {
    const theme=useContext(ThemeContext);
    const darkMode=theme.state.darkMode;
    const transition={duration: 2, type: "spring"};

    const r=document.querySelector(':root')
    const rs=getComputedStyle(r);

  return (
    <div className='s' id='Skill'>
        <motion.div 
        initial={{left: '-5vw'}}
        whileInView={{left: '44vw'}}
        transition={transition}
        className="s-title" style={{backgroundColor: darkMode && rs.getPropertyValue('--white'),
        color: darkMode && rs.getPropertyValue('--lightBlack')}}>Skills</motion.div>
        <div className="s-card">
          {
            skillData.map((item=>(
              <Card key={item.id} text={item.title}/>
            )))
          }
        </div>
    </div>
  )
}


export default Skill