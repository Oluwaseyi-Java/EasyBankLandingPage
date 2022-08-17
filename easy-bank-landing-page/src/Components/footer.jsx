import React from 'react'
import logo from "../images/logo.svg"
import { UIData } from '../API'
const Footer = () => {
  return (
    <footer>
      <div className='first '>
        <img src={logo} alt='pic' />
        <div className='icons'>
          {UIData.icons.map((item, index) => {
            return <span key={index}>{item}</span>
          })}
        </div>
      </div>
      <div className='second '>
        {UIData.bNav.map((item, index) => {
          return (
            <p key={index}>{item}</p>
          )
        })}
      </div>
      <div className='third '>
        <div className='btn' >
          <button>Request Invite</button>
        </div>
        <p> Easybank. All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer