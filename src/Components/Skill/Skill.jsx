import React from 'react'
import "./Skill.css"
import { useContext } from 'react';
import { ThemeContext } from '../../Context';
import { skillData } from './SkillData';
import Card from './Card';

const Skill = () => {
  const theme=useContext(ThemeContext);
  const darkMode=theme.state.darkMode;

  const r=document.querySelector(':root');
  const rs=getComputedStyle(r);

  return (
    <div className='s' id='Skill'>
        <div className='s-title-comp'>
            <img src={skillData.logo} alt='' className='s-title-logo'/>
            <div className="s-title-text" style={{color: darkMode &&'skyblue'}}>{skillData.title}</div>
        </div>
        <div className='s-underline' style={{backgroundColor: darkMode && 'whitesmoke'}}></div>
        <div className="skill-comp-wrapper">
          {
            skillData.skills.map((skill=>(
              <div className='skill-comp'>
                <div className="skill-comp-header">
                  <img src={skill.logo} alt="" className="skill-comp-logo" />
                  <div className="skill-comp-title" style={{color: darkMode && rs.getPropertyValue('--skyBlue')}}>{skill.title}:</div>
                </div>
                <div className="s-card-wrapper">
                  {
                    skill.items.map((item=>(
                      <Card key={item.id} {...item}/>
                    )))
                  }
                </div>
              </div>
            )))
          }
        </div>
    </div>
  )
}


export default Skill