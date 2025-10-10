import "./WorkExperience.css"
import { useContext } from 'react';
import { ThemeContext } from '../../Context';
import { workData } from './workData';
import ExperienceCard from './ExperienceCard';

const WorkExperience = () => {
  const theme=useContext(ThemeContext);
  const darkMode=theme.state.darkMode;

  return (
    <div className='exp' id='WorkExperience'>
      <div className='exp-title-comp'>
          <img src={workData.logo} alt='' className='exp-title-logo'/>
          <div className="exp-title-text" style={{color: darkMode &&'skyblue'}}>{workData.title}</div>
      </div>
      <div className='exp-underline' style={{backgroundColor: darkMode && 'whitesmoke'}}></div>
      {
        workData.experiences.map((item=>(
            <ExperienceCard key={item.id} {...item}/>
        )))
      }
    </div>
  )
}


export default WorkExperience;