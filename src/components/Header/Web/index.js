import React from 'react'
import './web.css'
function Web() {
  return (
   <div className="web">
      <div className="web-option">
        <a href="#project"><span class="material-symbols-outlined" id='option-icon'>business_center</span>Projects</a>
      </div>
      <div className="web-option">
        <a href="#skills"><span class="material-symbols-outlined" id='option-icon'>construction</span>Skills</a>
      </div>
      <div className="web-option">
        <a href="#work"><span class="material-symbols-outlined" id='option-icon'>computer</span>Work</a>
      </div>
      <div className="web-option">
        <a href="#contact"><span class="material-symbols-outlined" id='option-icon'>person</span>Contact</a>
      </div>
   </div>
  )
}

export default Web
