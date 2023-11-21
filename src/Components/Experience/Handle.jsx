import React from 'react'
import "./Handle.css"
import { useContext } from 'react'
import { ThemeContext } from '../../Context'
import codeforces from '../../img/codeforces.png'
import codechef from "../../img/codechef.jpg"
import atcoder from '../../img/atcoder.png'
import toph from '../../img/toph.png'
import leetcode from '../../img/leetcode.png'
import lightoj from '../../img/lightoj.png'
import uva from '../../img/uva.jpg'
import stopstalk from '../../img/stopstalk.png'


const Handle = (props) => {
    const theme=useContext(ThemeContext);
    const darkMode=theme.state.darkMode;

    const r=document.querySelector(':root');
    const rs=getComputedStyle(r);

    const imageArray=[
        codeforces,codechef,atcoder,lightoj,leetcode,toph,uva,stopstalk
    ]

    return (
        <div className='h' style={{backgroundColor: darkMode && rs.getPropertyValue('--white')}}>
            <div className="h-imgsection">
                <img src={imageArray[props.id]} alt="Can't See" className='h-img'/>
            </div>
            <div className="h-site">
                <a href={props.link} target='_blank' style={{textDecoration: 'none'}}>
                    <span className='h-handle'>{props.text}</span>
                </a>
                <br />
                <br />
                <span style={{fontSize: '35px'}}>{props.problem}</span>
                <br />
                <span style={{color: 'black'}}>Solved</span>
            </div>
        </div>
    )
}

export default Handle