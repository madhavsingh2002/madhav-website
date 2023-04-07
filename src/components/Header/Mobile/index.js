import React from 'react'
import './mobile.css'
function Mobile({isOpen,setIsOpen}) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={()=>setIsOpen(!isOpen)}>
        <span class="material-symbols-outlined">close</span>
      </div>
      <div className="mobile-options">
        <div className="mobile-option">
          <a href="#project"><span class="material-symbols-outlined" id='option-icon'>business_center</span>Projects</a>
        </div>
        <div className="mobile-option">
          <a href="#skills"><span class="material-symbols-outlined" id='option-icon'>construction</span>Skills</a>
        </div>
        <div className="mobile-option">
          <a href="#work"><span class="material-symbols-outlined" id='option-icon'>computer</span>Work</a>
        </div>
        <div className="mobile-option">
          <a href="#contact"><span class="material-symbols-outlined" id='option-icon'>person</span>Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Mobile
