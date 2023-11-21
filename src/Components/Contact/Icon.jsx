import React from 'react'
import "./Icon.css"

const Icon = (props) => {
  return (
      <a href={props.link} target='_blank'>
        <div className='icon'>
            {<props.icon color='black'/>}
        </div>
      </a>
  )
}

export default Icon