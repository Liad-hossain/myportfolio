import React, { useContext } from 'react';
import { ThemeContext } from '../../Context';
import "./Honor.css";
import { motion } from 'framer-motion';


const Honor = () => {
    const transition={duration: 2, type: 'spring'};

    const theme=useContext(ThemeContext);
    const darkMode=theme.state.darkMode;

    const r=document.querySelector(':root');
    const rs=getComputedStyle(r);

    return (
        <div className='hon' id='Honor'>
            <motion.div 
            initial={{left: '-5vw'}}
            whileInView={{left: '44vw'}}
            transition={transition}
            style={{backgroundColor: darkMode && rs.getPropertyValue('--white'), color: darkMode && rs.getPropertyValue('--lightBlack')}}
            className="hon-title">Honors</motion.div>
            <div className="hon-wrapper">
                <div className="hon-section">
                    <div className="hon-master">
                        <motion.div 
                        initial={{rotate: 45}}
                        whileInView={{rotate: 0}}
                        transition={transition}
                        className="master-circle">Candidate Master</motion.div>
                    </div>
                    <div className="hon-5star">
                        <motion.div 
                        initial={{rotate: -45}}
                        whileInView={{rotate: 0}}
                        transition={transition}
                        className="star-circle">5-Star</motion.div>
                    </div>
                </div>
                <div className="hon-site">
                    <div className="site-codeforces">
                        <a href="https://codeforces.com/profile/noctambulant?f0a28=1"  target='_blank' style={{textDecoration: 'none'}}>
                            <div className="link-codeforces" style={{color: darkMode? rs.getPropertyValue('--white'): rs.getPropertyValue('--darkBlue')}}>At Codeforces</div>
                        </a>
                    </div>
                    <div className="site-codechef">
                        <a href="https://www.codechef.com/users/poison08" target='_blank' style={{textDecoration: 'none'}}>
                            <div className="link-codechef" style={{color: darkMode? rs.getPropertyValue('--white'): rs.getPropertyValue('--purple')}}>At Codechef</div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Honor