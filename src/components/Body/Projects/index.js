import React from 'react'
import './projects.css'
import { ProjectData } from '../../data/Projects'
import ProjectCard from './Project-card';
import Separator from '../../common/separator';
function Projects() {
  const data = ProjectData; 
  return (<>

  
    <Separator/>
    <div className='projects'>
     <label className='section-title'>Projects</label>
     <div>
      {data.map((project)=>{
        return <ProjectCard project={project}/>
      })}
     </div>
    </div>
    <Separator/>
    </>
  )
}

export default Projects
