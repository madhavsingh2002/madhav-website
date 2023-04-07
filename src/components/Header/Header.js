import React, { useState } from 'react'
import Web from './Web'
import Mobile from './Mobile'
import './Header.css'
function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="header">
      <div className="logo">Madhav Singh</div>
      <div className="menu">
        <div className="web-menu"> <Web/> </div>
        <div className="mobile-menu"> 
          <div onClick={()=>setIsOpen(!isOpen)}>
          <span class="material-symbols-outlined" id='web-menu' >grid_view</span>
         </div> 
          {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen} />}
        </div>
      </div>
    </div>
  )
}

export default Header
