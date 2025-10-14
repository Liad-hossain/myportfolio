import "./Touch.css"
import { useContext } from 'react';
import {ThemeContext} from "../../Context"
import emailjs from '@emailjs/browser';
import { useRef } from 'react'
import { useState } from 'react';


const Touch = () => {
  const theme=useContext(ThemeContext);
  const darkMode=theme.state.darkMode;

  const r=document.querySelector(':root');
  const rs=getComputedStyle(r);

  const [done,setDone]=useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5g4tlol', 'template_7d56g7n', form.current, 'Ayf8UynUHni4cd3yN')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };


    return (
    <div className='touch' id='Touch'>
        <div className="touch-left">
            <div className="touch-text1" style={{color: darkMode && rs.getPropertyValue('--white')}}>Get In Touch</div>
            <div className="touch-text2">Contact Me</div>
        </div>
        <div className="touch-right">
            <form ref={form} onSubmit={sendEmail} className='touch-form' style={{backgroundColor: darkMode && rs.getPropertyValue('--white')}}>
                <input type="text" name='user_name' className='user' placeholder='Name' style={{backgroundColor: darkMode && 'white'}}/>
                <input type="email" name='user_email' className='user' placeholder='Email (required)*' style={{backgroundColor: darkMode && 'white'}}/>
                <textarea name="message" className='user_text' placeholder='Message' cols="30" rows="10" style={{backgroundColor: darkMode && 'white'}}></textarea>
                <input type="submit" value="Send" className='touch-button' />
                <span>{done && "Thanks for Contacting Me!!"}</span>
            </form>
        </div>
    </div>
    )
}

export default Touch