import React from 'react'
import Separator from '../../common/separator'
import SkillCard from './skill-card'
import { SkillsData } from '../../data/skill'
import './skill.css'
function Skills() {
  const data = SkillsData;
  return (
    <div className='skills'>
      <label className='section-title'>Skills</label>
      <div className="skills-container">
        {data.map((item)=>{
          return(
            <div className="skills-section">
              <label className="skills-section-title">
                {item.type}
              </label>
              <div className="skills-list">
                {item.list.map((skill)=>{
                  return <SkillCard skill={skill}/>
                })}
              </div>
            </div>
          )
        })}
      </div>
      <Separator/>
    </div>
  )
}

export default Skills
