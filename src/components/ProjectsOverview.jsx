import React from 'react'
import { projectsData } from '../data'
import {
  BsChevronRight,
} from "react-icons/bs";
import "../css/project.css";

const ProjectsOverview = () => {
  return (
    <section className='pro-details-container'>
      <h1>PROJECTS OVERVIEW</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure a praesentium distinctio dolor ducimus delectus eius, at nobis natus earum. Enim aliquam rerum hic repellat aut dolore, odio est adipisci tempore placeat maiores tempora, optio quo sint, numquam magni reprehenderit?</p>
      <h3>All Projects</h3>
      <div className='grid-container'>
      {projectsData.map((project, index) => (
        <div className='grid-item' key={index}>
          <img className='w-100' src={project.image} alt={project["details header"]} />
          <div>
            <h5>{project["details header"]}</h5>
            <button>
              <BsChevronRight />
            </button>
          </div>
        </div>
      ))}
      </div>
    </section>
  )
}

export default ProjectsOverview