import React from 'react'
import './workCard.css'
function WorkCard({item}) {
  return (
   <div className="work-card">
    {/* <img src={item.companyLogo} className='work-logo' /> */}
    <div className='work-logo'>
    {item.companyLogo}
    </div>
    
    <div className="work-info">
        <label className='company-name'> {item.company} </label>
        <div className="work-dates">
            <label>{item.dateJoining} </label>- <label>{item.dateEnd} </label>
        </div>
        <div>
            <p className='work-desc'> {item.work} </p>
        </div>
    </div>
   </div>
  )
}

export default WorkCard
