import React from 'react'
import "./Header.css"
import Toggle from "../Toggle/Toggle"
import HeaderText from './HeaderText'
import { headerData } from './headerData'

const Header = () => {
  return (
    <div className='header'>
        <div className="header-left">
            <Toggle className='left-toggle'/>
        </div>
        <div className="header-right">
            {
                headerData.map((item=>(
                    <HeaderText key={item.id} text={item.text} to={item.to} />
                )))
            }
        </div>
    </div>
  )
}

export default Header