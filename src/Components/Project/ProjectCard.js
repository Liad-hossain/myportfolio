import React from 'react'
import "./ProjectCard.css"
import Tiles_hop from '../../img/game.jpg'

const ProjectCard = (props) => {
  const projectArray=[
    Tiles_hop
  ];

  return (
    <div className='pr-card'>
        <div className="pr-imgsection">
          <img src={projectArray[props.id]} alt="Tiles_Hop" className='pr-image' />
        </div>
        <div className="pr-section">
          <div className="pr-text">Tiles Hop Game</div>
          <a href={props.link} target='_blank' style={{textDecoration: 'none'}}>
            <div className="pr-code">Source Code</div>
          </a>
        </div>
    </div>
  )
}

export default ProjectCard