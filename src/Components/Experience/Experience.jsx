import React from 'react'
import "./Experience.css"
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { ThemeContext } from '../../Context'
import Handle from './Handle';
import { experienceData } from "./ExperienceData.js"
import StopStalk from "../../img/stopstalk.png"
import { toBeInTheDocument } from '@testing-library/jest-dom/dist/matchers'

const Experience = () => {
    const theme=useContext(ThemeContext);
    const darkMode=theme.state.darkMode;

    const r=document.querySelector(':root');
    const rs=getComputedStyle(r);

    const transition={duration: 2, type: "spring"};


  return (
    <div 
    className='e' id='Experience'>
        <motion.div 
        initial={{right: '-5vw'}}
        whileInView={{right: '43vw'}}
        transition={transition}
        className="e-title" style={{backgroundColor: darkMode && rs.getPropertyValue('--white'), color: darkMode && rs.getPropertyValue('--lightBlack')}}>Experience</motion.div>
        <div className="e-handle">
          {
            experienceData.map((item=>(
                <Handle key={item.id} id={item.id-1} text={item.title} problem={item.problem} link={item.link}
                />
            )))
          }
        </div>
    </div>
  )
}

export default Experience