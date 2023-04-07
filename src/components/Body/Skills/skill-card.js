import React from 'react'
import './skill-card.css'
function SkillCard({skill}) {
  return (
    <div className="skill-card">
        <div className="skill-icon">
            {skill.icon}
        </div>
        <div className="skill-name">
            {/* {skill.name} */}
        </div>
    </div>
  )
}

export default SkillCard
