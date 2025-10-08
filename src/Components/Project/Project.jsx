import React from 'react'
import "./Project.css"
import { motion } from 'framer-motion'
import { useContext } from 'react'
import { ThemeContext } from '../../Context'
import { projectData } from './projectData'
import ProjectCard from './ProjectCard'

const Project = () => {
  const theme=useContext(ThemeContext);
  const darkMode=theme.state.darkMode;

  const r=document.querySelector(':root');
  const rs=getComputedStyle(r);

  const transition={duration: 2,type: 'spring'};
  
  return (
    <div className='pr' id='Project'>
        <motion.div 
        initial={{right: '-5%'}}
        whileInView={{right: '43.5%'}}
        transition={transition}
        className="pr-title" style={{backgroundColor: darkMode && rs.getPropertyValue('--white'), color: darkMode && rs.getPropertyValue('--lightBlack')}}>Projects</motion.div>
        <div className="pr-section">
          {
            projectData.map((item=>(
              <ProjectCard key={item.id} id={item.id-1} link={item.link} />
            )))
          }
        </div>
    </div>
  )
}

export default Project