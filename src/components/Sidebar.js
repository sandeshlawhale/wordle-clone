import React, { useState } from 'react'
import { HiBars3 } from "react-icons/hi2";
import { CgClose } from "react-icons/cg";
import ME from '../assets/me.jpg'
import { Link } from 'react-router-dom';



export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false)

  return (
    <div className='sidebar'>
      <HiBars3 className='bar-icon' onClick={() => setSidebar(true)} />
      {sidebar && <div className="side-container">
        <div className="cross-icon-container">
          <CgClose className="cross-icon" onClick={() => setSidebar(false)} />
        </div>
        <div className="side-wrapper">
          <div className="side-content">
            <h1 className="side-title">
              Wordle Clone
            </h1>
              <Link to='/'>Home</Link>
              <Link to='/about-worlde'>About Wordle</Link>
              <Link to='/contact'>Contact</Link>
          </div>
          <div className="side-profile">
            <img src={ME} className='profile-image'/>
            <div className="profile-info">
              <h1 className="profile-name">
                Sandesh Lawhale
              </h1>
              <p className="profile-email">sandeshlawhale@gmai.com</p>
            </div>
          </div>
        </div>
      </div>}
    </div>
  )
}
