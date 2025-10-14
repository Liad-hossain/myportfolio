import "./Contact.css"
import { useContext } from 'react';
import { ThemeContext } from '../../Context';
import { contactData } from './contactData';
import ContactCard from './ContactCard';

const Contact = () => {
  const theme=useContext(ThemeContext);
  const darkMode=theme.state.darkMode;

  return (
    <div className='contact' id='Contact'>
        <div className='contact-title-comp'>
            <img src={contactData.logo} alt='' className='contact-title-logo'/>
            <div className="contact-title-text" style={{color: darkMode &&'skyblue'}}>{contactData.title}</div>
        </div>
        <div className='contact-underline' style={{backgroundColor: darkMode && 'whitesmoke'}}></div>
        <ContactCard {...contactData}/>
    </div>
  )
}


export default Contact;