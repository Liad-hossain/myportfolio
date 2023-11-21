import React from 'react'
import "./Contact.css"
import Icon from './Icon'
import { iconData } from './iconData'
import Call from '@iconscout/react-unicons/icons/uil-calling'
import Gmail from '../../img/gmail.jpg'

const Contact = () => {
  return (
    <div className='contact' id='Contact'>
        <div className="contact-left">
            <div className="left-text">My Contact</div>
            <span className='call'><Call className='call-icon' size='1.1rem'/>  +880-1983289584</span>
            <span className='gmail'><img src={Gmail} alt="" className='gmail-img'/> liad1809008@gmail.com</span>
        </div>
        <div className="contact-right">
          <div className="right-text">Follow Me On</div>
            <div className="right-icon">
              {iconData.map((item=>(
                <Icon key={item.id} icon={item.icon} link={item.link} />
              )))}
            </div>
          </div>
        </div>
  )
}

export default Contact