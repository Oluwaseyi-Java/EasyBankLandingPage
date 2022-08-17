import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import logo from "../images/logo.svg"
import { UIData } from '../API'

const Header = () => {

  const [isNavOpen, setIsNavOpen] = useState(false)

  const navToggle = () => {
    setIsNavOpen(!isNavOpen)
  }

  return (
    <div className={`Header ${isNavOpen ? "Open" : ""}`}>
      <div className='TopBar'>
        <div className='img' >
          <a href='#' >
            <img src={logo} alt='pic' />
          </a>
        </div>
        <div className='nav' >
          {UIData.nav.map((item, index) => {
            return <a key={index} href={`#${item}`}>{item}</a>
          })}
        </div>
        <div className='btn' >
          <button>Request Invite</button>
        </div>

        {isNavOpen ? <FaTimes onClick={navToggle} id="NavToggle" /> : <FaBars onClick={navToggle} id="NavToggle" />}

      </div>
      <div className={`Navigation ${isNavOpen ? "" : "NavClose"}`}>
        <div className='NavCard'>
          {UIData.nav.map((item, index) => {
            return <p key={index}><a href={`#${item}`}>{item}</a></p>
          })}
        </div>
      </div>
    </div>
  )
}

export default Header