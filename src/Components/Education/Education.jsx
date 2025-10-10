import "./Education.css"
import { useContext } from 'react';
import { ThemeContext } from '../../Context';
import { educationData } from './EducationData';
import EducationCard from './EducationCard';

const Education = () => {
  const theme=useContext(ThemeContext);
  const darkMode=theme.state.darkMode;

  return (
    <div className='edu' id='Education'>
        <div className='edu-title-comp'>
            <img src={educationData.logo} alt='' className='edu-title-logo'/>
            <div className="edu-title-text" style={{color: darkMode &&'skyblue'}}>{educationData.title}</div>
        </div>
        <div className='edu-underline' style={{backgroundColor: darkMode && 'whitesmoke'}}></div>
        {
            educationData.institutions.map((item=>(
                <EducationCard key={item.id} {...item}/>
            )))
        }
    </div>
  )
}


export default Education