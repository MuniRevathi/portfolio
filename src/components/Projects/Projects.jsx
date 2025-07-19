import React from 'react';
import './Projects.css';
import projects from '../../data/projects.json';
import  ProjectCard  from './ProjectCard';

const Projects = () => {
  return (
    <section className="projects-container" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
};


export default Projects;