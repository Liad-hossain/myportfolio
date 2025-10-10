import "./EducationCard.css"
import { useContext } from 'react'
import { ThemeContext } from '../../Context'

const EducationCard = (props) => {
  const theme=useContext(ThemeContext);
  const darkMode=theme.state.darkMode;

  const { id, logo, ...info } = props;

  return (
    <div className='edu-card-wrapper'>
        <div className='edu-card'>
            <img src={logo} alt="" className="edu-card-logo" />
            <div className="edu-card-comp">
                {Object.entries(info).map(([key, value]) => (
                    <p
                    key={key}
                    className={`edu-card-${key}`}
                    style={{color: darkMode && 'whitesmoke'}}
                    >
                    {value}
                    </p>
                ))}
            </div>
        </div>
        <div className='edu-card-underline' style={{backgroundColor: darkMode && 'whitesmoke'}}></div>
    </div>
  )
}

export default EducationCard