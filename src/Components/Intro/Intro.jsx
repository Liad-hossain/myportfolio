import React, { useContext } from 'react';
import "./Intro.css";
import { ThemeContext } from '../../Context';
import Me from "../../img/Boy.png";
import Resume from "../../img/Resume_of_MD._Liad_Hossain.pdf"

const Intro = () => {
  const theme=useContext(ThemeContext);
  const darkMode=theme.state.darkMode;
  const r=document.querySelector(':root');
  const rs=getComputedStyle(r);
  return (
    <div className='i' id='Intro'>
        <div className="i-left">
            <div className="i-title">
                <span className="i-title-1" style={{color: darkMode && rs.getPropertyValue('--white')}}>Hi! </span>
                <span className="i-title-2" style={{color: darkMode && rs.getPropertyValue('--softPink')}}>I'm</span>
            </div>
            <br />
            <span className='i-name' style={{color: darkMode && rs.getPropertyValue('--brightOrange')}}>MD Liad Hossain</span>
            <div className="i-box">
              <div className="i-box-wrapper">
                <p className="i-box-item" style={{color: darkMode && rs.getPropertyValue('--skyBlue')}}>Competitive Programmer</p>
                <p className="i-box-item" style={{color: darkMode && rs.getPropertyValue('--skyBlue')}}>Problem Solver</p>
                <p className="i-box-item" style={{color: darkMode && rs.getPropertyValue('--skyBlue')}}>Candidate Master</p>
                <p className="i-box-item" style={{color: darkMode && rs.getPropertyValue('--skyBlue')}}>5-Star Programmer</p>
              </div>
            </div>
            <div className="i-desc" style={{color: darkMode && rs.getPropertyValue('--white')}}>A passionate Competitive Programmer who has excellent understanding on Data Structures & Algorithms and loves to solve problems, participated three times in ICPC Dhaka Regional and one time in ICPC Asia West Continent Final and many online and onsite contests.</div>
            
            <a href={Resume} download className='i-link'>
              <div className="i-button" style={{color: darkMode && rs.getPropertyValue('--white')}}>Download My CV</div>
            </a>
        </div>
        <div className="i-right">
          <div className="i-bg"></div>
          <img src={Me} alt="" className="i-right-img"/>
        </div>
    </div>
  )
}

export default Intro